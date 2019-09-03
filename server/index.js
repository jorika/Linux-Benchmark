new Vue({
	el: '#data',
	data: {
		names: [],
		hideStyle: { display: 'none' }
	},
	
	computed: {
		checkedNames: function() {
			return this.names.filter(function(item){
				return item.checked;
			}).map(function(item){
				return item.name;
			});
		}
	},
	methods: {
		read: function(path) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', path, false);
			xhr.send();
			if (xhr.status != 200) {
				throw 'Error with status: ' + xhr.status + '\n' + 'Path: ' + path + '\n' + xhr.statusText;
			}
			return xhr.responseText;
		},
		
		csv: function() {
			var self = this;
			var json = {
				fields: [''],
				data: [
				['Geekbench3_SingleCore'],
				['Geeks3D'],
				['SysbenchMaxPrime'],
				['Geekbench3_SingleCore_Floating'],
				['Geekbench3_SingleCore_Integer'],
				['Geekbench3_SingleCore_Memory'],
				['Geekbench3_MultiCore'],
				['Geekbench3_MultiCore_Floating'],
				['Geekbench3_MultiCore_Integer'],
				['Geekbench3_MultiCore_Memory'],
				['Geekbench4_MultiCore'],
				['Geekbench4_MultiCore_CryptoScore'],
				['Geekbench4_MultiCore_Floatpoint'],
				['Geekbench4_MultiCore_IntegerScore'],
				['Geekbench4_MultiCore_MemoryScore'],
				['Geekbench4_SingleCore'],
				['Geekbench4_SingleCore_CryptoScore'],
				['Geekbench4_SingleCore_Floatpoint'],
				['Geekbench4_SingleCore_IntegerScore'],
				['Geekbench4_SingleCore_MemoryScore'],
				['Intel_B7ZIP_Compress'],
				['Intel_B7ZIP_deCompress'],
				['Intel_erasure'],
				['Intel_Parallel_Sort'],
				['Intel_pvcf'],
				['Intel_pxml']

				]
			};
			this.checkedNames.forEach(function(name) {

				json.fields.push(name);

				var Geekbench3_SingleCore    			 = self.read('database/' + name + '/Data_Geekbench3_SingleCore.txt');
				var Geeks3D      			   			 = self.read('database/' + name + '/Data_Geeks3D.txt');
				var SysbenchMaxPrime				 	 = self.read('database/' + name + '/Data_sysbenchMaxPrime.txt');
				var Geekbench3_SingleCore_Floating		 = self.read('database/' + name + '/Data_Geekbench3_SingleCore_Floating.txt');
				var Geekbench3_SingleCore_Integer		 = self.read('database/' + name + '/Data_Geekbench3_SingleCore_Integer.txt');
				var Geekbench3_SingleCore_Memory		 = self.read('database/' + name + '/Data_Geekbench3_SingleCore_Memory.txt');
				var Geekbench3_MultiCore		 		 = self.read('database/' + name + '/Data_Geekbench3_MultiCore.txt');
				var Geekbench3_MultiCore_Floating		 = self.read('database/' + name + '/Data_Geekbench3_MultiCore_Floating.txt');
				var Geekbench3_MultiCore_Integer		 = self.read('database/' + name + '/Data_Geekbench3_MultiCore_Integer.txt');
				var Geekbench3_MultiCore_Memory		     = self.read('database/' + name + '/Data_Geekbench3_MultiCore_Memory.txt');
				var Geekbench4_MultiCore		     	 = self.read('database/' + name + '/Data_Geekbench4_MultiCore.txt');
				var Geekbench4_MultiCore_CryptoScore	 = self.read('database/' + name + '/Data_Geekbench4_MultiCore_CryptoScore.txt');
				var Geekbench4_MultiCore_Floatpoint	     = self.read('database/' + name + '/Data_Geekbench4_MultiCore_Floatpoint.txt');
				var Geekbench4_MultiCore_IntegerScore	 = self.read('database/' + name + '/Data_Geekbench4_MultiCore_IntegerScore.txt');
				var Geekbench4_MultiCore_MemoryScore	 = self.read('database/' + name + '/Data_Geekbench4_MultiCore_MemoryScore.txt');
				var Geekbench4_SingleCore				 = self.read('database/' + name + '/Data_Geekbench4_SingleCore.txt');
				var Geekbench4_SingleCore_CryptoScore	 = self.read('database/' + name + '/Data_Geekbench4_SingleCore_CryptoScore.txt');
				var Geekbench4_SingleCore_Floatpoint	 = self.read('database/' + name + '/Data_Geekbench4_SingleCore_Floatpoint.txt');
				var Geekbench4_SingleCore_IntegerScore	 = self.read('database/' + name + '/Data_Geekbench4_SingleCore_IntegerScore.txt');
				var Geekbench4_SingleCore_MemoryScore	 = self.read('database/' + name + '/Data_Geekbench4_SingleCore_MemoryScore.txt');
				var Intel_B7ZIP_Compress	 			 = self.read('database/' + name + '/Data_Intel_B7ZIP_Compress.txt');
				var Intel_B7ZIP_deCompress	 			 = self.read('database/' + name + '/Data_Intel_B7ZIP_deCompress.txt');
				var Intel_erasure	 			 		 = self.read('database/' + name + '/Data_Intel_erasure.txt');
				var Intel_Parallel_Sort	 			     = self.read('database/' + name + '/Data_Intel_Parallel_Sort.txt');
				var Intel_pvcf	 			    		 = self.read('database/' + name + '/Data_Intel_p-vcf.txt');
				var Intel_pxml	 			    		 = self.read('database/' + name + '/Data_Intel_p-xml.txt');
				
				
				json.data[0].push(Geekbench3_SingleCore);
				json.data[1].push(Geeks3D);
				json.data[2].push(SysbenchMaxPrime);
				json.data[3].push(Geekbench3_SingleCore_Floating);
				json.data[4].push(Geekbench3_SingleCore_Integer);
				json.data[5].push(Geekbench3_SingleCore_Memory);
				json.data[6].push(Geekbench3_MultiCore);
				json.data[7].push(Geekbench3_MultiCore_Floating);
				json.data[8].push(Geekbench3_MultiCore_Integer);
				json.data[9].push(Geekbench3_MultiCore_Memory);
				json.data[10].push(Geekbench4_MultiCore);
				json.data[11].push(Geekbench4_MultiCore_CryptoScore);
				json.data[12].push(Geekbench4_MultiCore_Floatpoint);
				json.data[13].push(Geekbench4_MultiCore_IntegerScore);
				json.data[14].push(Geekbench4_MultiCore_MemoryScore);
				json.data[15].push(Geekbench4_SingleCore);
				json.data[16].push(Geekbench4_SingleCore_CryptoScore);
				json.data[17].push(Geekbench4_SingleCore_Floatpoint);
				json.data[18].push(Geekbench4_SingleCore_IntegerScore);
				json.data[19].push(Geekbench4_SingleCore_MemoryScore);
				json.data[20].push(Intel_B7ZIP_Compress);
				json.data[21].push(Intel_B7ZIP_deCompress);
				json.data[22].push(Intel_erasure);
				json.data[23].push(Intel_Parallel_Sort);
				json.data[24].push(Intel_pvcf);
				json.data[25].push(Intel_pxml);

				});

			console.log(json);
			var csvConfig = {
								quotes: true,
								quoteChar: '"',
								delimiter: ",",
								header: true,
								newline: "\r\n"
							};
			var csv = Papa.unparse(json,csvConfig);

			console.log(csv);

			var BenchmarkSystem = new Blob([csv], {type: "text/plain;charset=utf-8"});
			saveAs(BenchmarkSystem, "Benchmark.csv");
		},
		
		redraw: function() {
			this.hideStyle.display = (this.checkedNames.length == 0) ? 'none' : 'block';

			Geekbench3SingleCoreChart.data.datasets = [];
			Geekbench3SingleCoreInfoSetChart.data.datasets = []; //Data_Geekbench3_SingleCore_Floating;Data_Geekbench3_SingleCore_Integer;Data_Geekbench3_SingleCore_Memory
			Geekbench3MultiCoreChart.data.datasets = [];
			Geekbench3MultiCoreInfoSetChart.data.datasets = [];  //Data_Geekbench3_MultiCore_Floating;Data_Geekbench3_MultiCore_Integer;Data_Geekbench3_MultiCore_Memory
			Geekbench4_MultiCoreChart.data.datasets  = [];
			Geekbench4_MultiCoreSetChart.data.datasets  = [];    //Data_Geekbench4_MultiCore_CryptoScore;Data_Geekbench4_MultiCore_Floatpoint;Data_Geekbench4_MultiCore_IntegerScore;Data_Geekbench4_MultiCore_MemoryScore
			Geekbench4_SingleCoreChart.data.datasets  = [];
			Geekbench4_SingleCoreSetChart.data.datasets  = [];   
			Intel_B7ZIPCharts.data.datasets = [];
			Intel_EPCharts.data.datasets = [];
			Intel_PPCharts.data.datasets = [];
			Geeks3DChart.data.datasets = [];					
			SysbenchMaxPrimeChart.data.datasets = [];			


			var self = this;
			this.checkedNames.forEach(function(name) {
				var Data_Geekbench3_SingleCore					 = self.read('database/' + name + '/Data_Geekbench3_SingleCore.txt');
				var Data_Geeks3D								 = self.read('database/' + name + '/Data_Geeks3D.txt');
				var Data_sysbenchMaxPrime						 = self.read('database/' + name + '/Data_sysbenchMaxPrime.txt')

				var Data_Geekbench3_SingleCore_Floating			 = self.read('database/' + name + '/Data_Geekbench3_SingleCore_Floating.txt');
				var Data_Geekbench3_SingleCore_Integer			 = self.read('database/' + name + '/Data_Geekbench3_SingleCore_Integer.txt');
				var Data_Geekbench3_SingleCore_Memory			 = self.read('database/' + name + '/Data_Geekbench3_SingleCore_Memory.txt');
				
				var Data_Geekbench3_MultiCore					 = self.read('database/' + name + '/Data_Geekbench3_MultiCore.txt');

				var Data_Geekbench3_MultiCore_Floating			 = self.read('database/' + name + '/Data_Geekbench3_MultiCore_Floating.txt');
				var Data_Geekbench3_MultiCore_Integer			 = self.read('database/' + name + '/Data_Geekbench3_MultiCore_Integer.txt');
				var Data_Geekbench3_MultiCore_Memory			 = self.read('database/' + name + '/Data_Geekbench3_MultiCore_Memory.txt');

				var Data_Geekbench4_MultiCore				     = self.read('database/' + name + '/Data_Geekbench4_MultiCore.txt');

				var Data_Geekbench4_MultiCore_CryptoScore        = self.read('database/' + name + '/Data_Geekbench4_MultiCore_CryptoScore.txt');
				var Data_Geekbench4_MultiCore_Floatpoint         = self.read('database/' + name + '/Data_Geekbench4_MultiCore_Floatpoint.txt');
				var Data_Geekbench4_MultiCore_IntegerScore       = self.read('database/' + name + '/Data_Geekbench4_MultiCore_IntegerScore.txt');
				var Data_Geekbench4_MultiCore_MemoryScore        = self.read('database/' + name + '/Data_Geekbench4_MultiCore_MemoryScore.txt');

				var Data_Geekbench4_SingleCore				     = self.read('database/' + name + '/Data_Geekbench4_SingleCore.txt');

				var Data_Geekbench4_SingleCore_CryptoScore       = self.read('database/' + name + '/Data_Geekbench4_SingleCore_CryptoScore.txt');
				var Data_Geekbench4_SingleCore_Floatpoint        = self.read('database/' + name + '/Data_Geekbench4_SingleCore_Floatpoint.txt');
				var Data_Geekbench4_SingleCore_IntegerScore      = self.read('database/' + name + '/Data_Geekbench4_SingleCore_IntegerScore.txt');
				var Data_Geekbench4_SingleCore_MemoryScore       = self.read('database/' + name + '/Data_Geekbench4_SingleCore_MemoryScore.txt');

				var Data_Intel_B7ZIP_Compress				     = self.read('database/' + name + '/Data_Intel_B7ZIP_Compress.txt');
				var Data_Intel_B7ZIP_deCompress					 = self.read('database/' + name + '/Data_Intel_B7ZIP_deCompress.txt');
				var Data_Intel_erasure   						 = self.read('database/' + name + '/Data_Intel_erasure.txt');
				var Data_Intel_Parallel_Sort   					 = self.read('database/' + name + '/Data_Intel_Parallel_Sort.txt');
				var Data_Intel_pvcf   	   						 = self.read('database/' + name + '/Data_Intel_p-vcf.txt');
				var Data_Data_Intel_pxml   	   					 = self.read('database/' + name + '/Data_Intel_p-xml.txt');
				var color      									 = self.read('database/' + name + '/Color.txt');


				var colorCanvas = document.createElement('canvas');
				colorCanvas.width  = 1;
				colorCanvas.height = 1;
				var ctx = colorCanvas.getContext('2d');
				ctx.fillStyle = color;
				ctx.fillRect(0, 0, 1, 1);

				var fillPattern = ctx.createPattern(colorCanvas, 'repeat');
				colorCanvas.remove();

				Geekbench3SingleCoreChart.data.datasets.push({
					label: name,
					backgroundColor: fillPattern,
					borderWidth: 10,
					data: [Data_Geekbench3_SingleCore]
				});

				Geeks3DChart.data.datasets.push({
					label: name,
					backgroundColor: fillPattern,
					borderWidth: 10,
					data: [Data_Geeks3D]
				});

				SysbenchMaxPrimeChart.data.datasets.push({
					label: name,
					backgroundColor: fillPattern,
					borderWidth: 10,
					data: [Data_sysbenchMaxPrime]
				});

				Geekbench3MultiCoreChart.data.datasets.push({
					label: name,
					backgroundColor: fillPattern,
					borderWidth: 10,
					data: [Data_Geekbench3_MultiCore]
				});

				Geekbench4_MultiCoreChart.data.datasets.push({
					label: name,
					backgroundColor: fillPattern,
					borderWidth: 10,
					data: [Data_Geekbench4_MultiCore]
				});

				Geekbench4_SingleCoreChart.data.datasets.push({
					label: name,
					backgroundColor: fillPattern,
					borderWidth: 10,
					data: [Data_Geekbench4_SingleCore]
				});

				Intel_B7ZIPCharts.data.datasets.push({
					label: name,
					backgroundColor: [fillPattern, fillPattern],
					borderWidth: 10,
					data: [Data_Intel_B7ZIP_Compress, Data_Intel_B7ZIP_deCompress]
				});

				Intel_EPCharts.data.datasets.push({
					label: name,
					backgroundColor: [fillPattern, fillPattern],
					borderWidth: 10,
					data: [Data_Intel_erasure, Data_Intel_Parallel_Sort]
				});

				Intel_PPCharts.data.datasets.push({
					label: name,
					backgroundColor: [fillPattern, fillPattern],
					borderWidth: 10,
					data: [Data_Intel_pvcf, Data_Data_Intel_pxml]
				});

				Geekbench3SingleCoreInfoSetChart.data.datasets.push({
					label: name,
					backgroundColor: [fillPattern, fillPattern, fillPattern],
					borderWidth: 10,
					data: [Data_Geekbench3_SingleCore_Floating, Data_Geekbench3_SingleCore_Integer, Data_Geekbench3_SingleCore_Memory]
				});

				Geekbench3MultiCoreInfoSetChart.data.datasets.push({
					label: name,
					backgroundColor: [fillPattern, fillPattern, fillPattern],
					borderWidth: 10,
					data: [Data_Geekbench3_MultiCore_Floating, Data_Geekbench3_MultiCore_Integer, Data_Geekbench3_MultiCore_Memory]
				});

				Geekbench4_MultiCoreSetChart.data.datasets.push({
					label: name,
					backgroundColor: [fillPattern, fillPattern, fillPattern, fillPattern],
					borderWidth: 10,
					data: [Data_Geekbench4_MultiCore_CryptoScore, Data_Geekbench4_MultiCore_Floatpoint, Data_Geekbench4_MultiCore_IntegerScore, Data_Geekbench4_MultiCore_MemoryScore]
				});

				Geekbench4_SingleCoreSetChart.data.datasets.push({
					label: name,
					backgroundColor: [fillPattern, fillPattern, fillPattern, fillPattern],
					borderWidth: 10,
					data: [Data_Geekbench4_SingleCore_CryptoScore, Data_Geekbench4_SingleCore_Floatpoint, Data_Geekbench4_SingleCore_IntegerScore, Data_Geekbench4_SingleCore_MemoryScore]
				});
			});

			Geekbench3SingleCoreChart.update();
			Geekbench3MultiCoreChart.update();
			Geekbench4_MultiCoreChart.update();
			Geekbench4_SingleCoreChart.update();
			Intel_B7ZIPCharts.update();
			Intel_EPCharts.update();
			Intel_PPCharts.update();
			Geekbench3SingleCoreInfoSetChart.update();
			Geekbench3MultiCoreInfoSetChart.update();
			Geekbench4_MultiCoreSetChart.update();
			Geekbench4_SingleCoreSetChart.update();
			Geeks3DChart.update();
			SysbenchMaxPrimeChart.update();
		}
	},
	created: function() {
		var pattern = /<a href="[^/]+\/">([^/]+)\/<\/a>/g;
		while (match = pattern.exec(this.read('database/'))) {
			this.names.push({
				id: this.names.length,
				name: match[1],
				checked: false
			});
		}
	}
})