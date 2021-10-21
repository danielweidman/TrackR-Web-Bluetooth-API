var alertCharacteristic;
var beepServiceUuid = "0x1802";
var beepCharacteristicUuid = "0x2A06";

function getReadyToBeep(onReady) {
  let serviceUuid = beepServiceUuid;
  if (serviceUuid.startsWith('0x')) {
    serviceUuid = parseInt(serviceUuid);
  }

  let characteristicUuid = beepCharacteristicUuid;
  if (characteristicUuid.startsWith('0x')) {
    characteristicUuid = parseInt(characteristicUuid);
  }

  console.log('Requesting TrackR Bluetooth Device...');
  navigator.bluetooth.requestDevice({
      filters: [{namePrefix: "tkr"}],
      optionalServices: [serviceUuid]})
  .then(device => {
    console.log('Connecting to GATT Server...');
    return device.gatt.connect();
  })
  .then(server => {
    console.log('Getting Service...');
    return server.getPrimaryService(serviceUuid);
  })
  .then(service => {
    console.log('Getting Characteristic...');
    return service.getCharacteristic(characteristicUuid);
  }).then(characteristic => {
    alertCharacteristic = characteristic;
    onReady();
  })
}

async function doTheBeep() {
  let value = Uint8Array.of(0x01);
  await alertCharacteristic.writeValue(value);
}
