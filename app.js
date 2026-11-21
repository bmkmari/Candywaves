const selectedName = document.getElementById('selectedName');
const connectionStatus = document.getElementById('connectionStatus');
const bluetoothBtn = document.getElementById('bluetoothBtn');
const compatNotice = document.getElementById('compatNotice');
let selectedDeviceName = '';

document.querySelectorAll('.connect-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.connect-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedDeviceName = btn.dataset.device;
    selectedName.textContent = selectedDeviceName;
    connectionStatus.textContent = 'Modelo selecionado. A integração específica ainda está em desenvolvimento.';
  });
});

bluetoothBtn.addEventListener('click', async () => {
  if (!selectedDeviceName) {
    connectionStatus.textContent = 'Selecione uma lightstick primeiro.';
    return;
  }
  if (!navigator.bluetooth) {
    connectionStatus.textContent = 'Web Bluetooth não está disponível neste navegador. Tente Chrome ou Edge em um dispositivo compatível.';
    return;
  }
  try {
    connectionStatus.textContent = 'Abrindo seletor Bluetooth…';
    const device = await navigator.bluetooth.requestDevice({acceptAllDevices: true});
    connectionStatus.textContent = `Dispositivo encontrado: ${device.name || 'nome não informado'}. Ainda falta implementar e validar o protocolo da ${selectedDeviceName}.`;
    compatNotice.textContent = 'O navegador permitiu selecionar um dispositivo BLE. Isso não confirma que ele seja a lightstick selecionada nem que o site consiga controlá-la. Nenhum comando de iluminação foi enviado.';
  } catch (error) {
    if (error.name === 'NotFoundError') connectionStatus.textContent = 'Nenhum dispositivo foi selecionado.';
    else connectionStatus.textContent = `Não foi possível iniciar a seleção Bluetooth: ${error.message}`;
  }
});

const colorPicker = document.getElementById('colorPicker');
const previewLight = document.getElementById('previewLight');
const hexValue = document.getElementById('hexValue');
const colorName = document.getElementById('colorName');
const brightness = document.getElementById('brightness');
const brightnessValue = document.getElementById('brightnessValue');

function updateColor(color) {
  colorPicker.value = color;
  previewLight.style.background = color;
  previewLight.style.boxShadow = `0 0 35px ${color}, 0 0 85px ${color}88`;
  hexValue.textContent = color.toUpperCase();
  colorName.textContent = ({'#f58ac7':'Candy pink','#b69aff':'Lavender dream','#8edcf5':'Sky blue','#fff2a6':'Lemon drop','#ffffff':'Pearl white'})[color.toLowerCase()] || 'Custom color';
}
colorPicker.addEventListener('input', e => updateColor(e.target.value));
document.querySelectorAll('.swatch').forEach(btn => btn.addEventListener('click', () => updateColor(btn.dataset.color)));
brightness.addEventListener('input', () => {
  brightnessValue.textContent = `${brightness.value}%`;
  previewLight.style.opacity = Number(brightness.value) / 100;
});
document.getElementById('savePreset').addEventListener('click', () => {
  document.getElementById('saveMessage').textContent = `Cor ${colorPicker.value.toUpperCase()} escolhida! Nesta versão, ela fica apenas na prévia.`;
});
document.querySelectorAll('.music-card').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.music-card').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('songStatus').textContent = `${btn.dataset.song} selecionada. A reprodução e sincronização com a lightstick ainda não estão implementadas.`;
}));
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('devices').scrollIntoView({behavior:'smooth'});
});
