var devices = [];

var device1 = {
    name: "00:00:00:00:00:00",
    variableName: "temp",
    lastValues: [],
    dId: "1234543"
};
var device2 = {
    name: "00:00:00:00:00:04",
    variableName: "temp",
    lastValues: [],
    dId: "563445"
};

devices.push(device1);
devices.push(device2);

devices[0].lastValues.push(
    {
        value: 21,
        time: Date.now()
    }
);

devices[0].lastValues.push(
    {
        value: 21,
        time: Date.now()
    }
);

var json = {
    name: '00:00:00:00:00:04',
    variableName: 'temp',
}


//string example
var str = '{"name": "home", "value": 5}'

console.log(devices)
console.log(JSON.stringify(devices))













/*
var devices = [
    {
        MAC: "00:00:00:00:00:00",
        rssiSet: "-50",
        devicesCountedAroundEachEvery10Sec: 8,
        devicesDetected: [
            {
                MAC: "00:00:00:00:00:03",
                rssi: "-57",
            },
            {
                MAC: "00:00:00:00:00:04",
                rssi: "-50",
            }
    ]
    },
    {
        MAC: "00:00:00:00:00:01",
        rssiSet: "-40",
        devicesAround: 5,
    }

];

console.log(devices.devicesCountedAroundEachEvery10Sec.rssi);

*/