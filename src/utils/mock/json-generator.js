[
    '{{repeat(500, 7)}}',
    {
      _id: '{{objectId()}}',
      isActive: '{{bool()}}',
      cost: '{{floating(1000, 8000, 2, "$0,0.00")}}',
      age: '{{integer(30, 70)}}',
      height: '{{integer(160, 200)}}',
      weight: '{{integer(60, 100)}}',
      name: '{{firstName()}} {{surname()}}',
      gender: '{{gender()}}',
      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
      registered: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
      latitude: '{{floating(26.000001, 47.000001)}}',
      longitude: '{{floating(-71.000001, -122.000001)}}',
      patch: 'P-{{integer(100000000, 999999999999)}}',
      doctors: [
        '{{repeat(3)}}',
        {
          id: '{{index()}}',
          name: '{{firstName()}} {{surname()}}'
        }
      ],
      lastupdate: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
      status: function (tags) {
        var statuses = ['CRITICAL', 'NORMAL', 'MEDIUM'];
        return statuses[tags.integer(0, statuses.length - 1)];
      },
      hospital: function (tags) {
        var statuses = ['Mayo Clinic', 'UCSF Medical Center', 'John Hopkins Hospital', 'Cleveland Clinic', 'Massachusetts General Hospital'];
        return statuses[tags.integer(0, statuses.length - 1)];
      },
      medication: function (tags) {
        var medicationlist = ['Blood Pressure', 'Diabetes', 'Heart Disease', 'Asthma', 'Cholesterol'];
        function sample(pool, k, destructive) {
          var n = pool.length;
  
          if (k < 0 || k > n)
              throw new RangeError("Sample larger than population or is negative");
  
          if (destructive || n <= (k <= 5 ? 21 : 21 + Math.pow(4, Math.ceil(Math.log(k*3, 4))))) {
              if (!destructive)
                  pool = Array.prototype.slice.call(pool);
              for (var i = 0; i < k; i++) { // invariant: non-selected at [i,n)
                  var j = i + Math.random() * (n - i) | 0;
                  var x = pool[i];
                  pool[i] = pool[j];
                  pool[j] = x;
              }
              pool.length = k; // truncate
              return pool;
          } else {
              var selected = new Set();
              while (selected.add(Math.random() * n | 0).size < k) {}
            return Array.prototype.map.call(selected, function(i){ return population[i];});
          }
        }
        return sample(medicationlist, 3);
      },
      sensors: function (tags) {
        var sensorslist = ['Blood Pressure', 'Sugar Levels', 'ECG', 'Temperature Sensor', 'SpO2', 'Geo Monitoring'];
        function sample(pool, k, destructive) {
          var n = pool.length;
  
          if (k < 0 || k > n)
              throw new RangeError("Sample larger than population or is negative");
  
          if (destructive || n <= (k <= 5 ? 21 : 21 + Math.pow(4, Math.ceil(Math.log(k*3, 4))))) {
              if (!destructive)
                  pool = Array.prototype.slice.call(pool);
              for (var i = 0; i < k; i++) { // invariant: non-selected at [i,n)
                  var j = i + Math.random() * (n - i) | 0;
                  var x = pool[i];
                  pool[i] = pool[j];
                  pool[j] = x;
              }
              pool.length = k; // truncate
              return pool;
          } else {
              var selected = new Set();
              while (selected.add(Math.random() * n | 0).size < k) {}
            return Array.prototype.map.call(selected, function(i){ return population[i];});
          }
        }
        return sample(sensorslist, 5);
      },
      gyroscope: '{{floating(0.000001, 180.000001)}}, {{floating(0.000001, 180.000001)}}, {{floating(0.000001, 180.000001)}}',
      accelerometer: '{{floating(0.000001, 180.000001)}}, {{floating(0.000001, 180.000001)}}, {{floating(0.000001, 180.000001)}}'
    }
  ]