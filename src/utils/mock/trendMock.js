let MOCK_SCHEMA={
  'spo2':{
    'min':0,
    'max':100,
    'backend_name' : 'trendspo2',
    'float': true
  },
  'temp':{
    'min':50,
    'max':110,
    'backend_name': 'trendtemperature',
    'float':true,
  },
  'rr':{
    'min':0,
    'max':45,
    'backend_name': 'trendrr',
    'float': true
  },
  'hr':{
    'min':0,
    'max':300,
    'backend_name': 'trendhr',
    'float': true
  },
  'ews':{
    'min':0,
    'max':25,
    'backend_name': 'trendews',
    'float': true
  },
  'pr':{
    'backend_name': 'trendpr',
    'float': true
  },
  'pi':{
    'backend_name': 'trendpi',
    'float': true
  },
  'bat_ecg': {
    'backend_name': 'trendbatteryEcg',
    'float': true
  },
  'bat_spo2': {
    'backend_name': 'trendbatterySpo2',
    'float': true
  },
  'bat_temp': {
    'backend_name': 'trendbatteryTemperature',
    'float': true
  },
  'bat_gw': {
    'backend_name': 'trendbatteryGateway',
    'float': true
  },
  'bps': {

    'backend_name': 'trendbps',
    'float': false
  },
  'bpd': {

    'backend_name': 'trendbpd',
    'float': false
  },
  'ds': {
    'backend_name': 'trendweight',
    'float': true
  },
}

module.exports = {
  MOCK_SCHEMA,
}
