var color1 = "#00cc01";
var color2 = "#20cc01";
var color3 = "#30cc01";
var color4 = "#31cc01";

var Geekbench4SingleCoreChart   = document.getElementById('Geekbench4_SingleCore-canvas').getContext('2d');
var Geekbench4_SingleCoreChart = new Chart(Geekbench4SingleCoreChart, {
		type: 'bar',
		data: {
			labels: ['Geekbench4 SingleCore (Score)'],
			datasets: [
				{
					label: "",
					backgroundColor: color1,
					borderWidth: 10,
					data: [2550]
				}, {
					label: "",
					backgroundColor: color2,
					borderWidth: 10,
					data: [3000]

				}, {
					label: "",
					backgroundColor: color3,
					borderWidth: 10,
					data: [3500]
				}
			]
		},
		options: {
			
			animations: {
				duration:2000,
				easing:'easeInOutBounce'
			},
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Geekbench 4.0.3 SingleCore Benchmark'
			}
		}
	}
);

var Geekbench3MultiCoreChartS   = document.getElementById('Geekbench3_MultiCore-canvas').getContext('2d');
var Geekbench3MultiCoreChart = new Chart(Geekbench3MultiCoreChartS, {
		type: 'bar',
		data: {
			labels: ['Geekbench3 MultiCore (Score)'],
			datasets: [
				{
					label: "",
					backgroundColor: color1,
					borderWidth: 10,
					data: [2550]
				}, {
					label: "",
					backgroundColor: color2,
					borderWidth: 10,
					data: [3000]

				}, {
					label: "",
					backgroundColor: color3,
					borderWidth: 10,
					data: [3500]
				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Geekbench 3.4.1 MultiCore Benchmark'
			}
		}
	}
);


var Geekbench3SingleCoreChartS   = document.getElementById('Geekbench3_SingleCore-canvas').getContext('2d');
var Geekbench3SingleCoreChart = new Chart(Geekbench3SingleCoreChartS, {
		type: 'bar',
		data: {
			labels: ['Geekbench3 SingleCore (Score)'],
			datasets: [
				{
					label: "",
					backgroundColor: color1,
					borderWidth: 10,
					data: [2550]
				}, {
					label: "",
					backgroundColor: color2,
					borderWidth: 10,
					data: [3000]

				}, {
					label: "",
					backgroundColor: color3,
					borderWidth: 10,
					data: [3500]
				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Geekbench 3.4.1 SingleCore Benchmark'
			}
		}
	}
);


var Geekbench4MultiCore   = document.getElementById('Geekbench4_MultiCore-canvas').getContext('2d');
var Geekbench4_MultiCoreChart = new Chart(Geekbench4MultiCore, {
		type: 'bar',
		data: {
			labels: ['Geekbench4 MultiCore (Score)'],
			datasets: [
				{
					label: "",
					backgroundColor: color1,
					borderWidth: 10,
					data: [500]
				}, {
					label: "",
					backgroundColor: color2,
					borderWidth: 10,
					data: [380]

				}, {
					label: "",
					backgroundColor: color3,
					borderWidth: 10,
					data: [400]

				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Geekbench 4.0.3 MultiCore Benchmark'
			}
		}
	}
);


var IntelB7ZIP    = document.getElementById('Intel_B7ZIP-canvas').getContext('2d');
var Intel_B7ZIPCharts = new Chart(IntelB7ZIP, {
		type: 'bar',
		data: {
			labels: ['B7ZIP Compress (in MIPS)', 'B7ZIP deCompress (in MIPS)'],
			datasets: [
				{
					label: "",
					backgroundColor: [color1, color2],
					borderWidth: 10,
					data: [1111, 6000]
				}, {
					label: "",
					backgroundColor: [color1, color2],
					borderWidth: 10,
					data: [7000, 7000]

				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Intel B7ZIP Benchmark'
			}
		}
	}
);



var IntelEPCharts    = document.getElementById('Intel_erasure-Parrallel_Sort-canvas').getContext('2d');
var Intel_EPCharts = new Chart(IntelEPCharts, {
		type: 'bar',
		data: {
			labels: ['Intel erasure (in μs)', 'Intel Parallel Sort (in μs)'],
			datasets: [
				{
					label: "",
					backgroundColor: [color1, color2],
					borderWidth: 10,
					data: [1111, 6000]
				}, {
					label: "",
					backgroundColor: [color1, color2],
					borderWidth: 10,
					data: [7000, 7000]

				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Intel erasure and Parallel Sort Benchmarks'
			}
		}
	}
);

var IntelPPCharts    = document.getElementById('Intel_p-cvf-p-xml-canvas').getContext('2d');
var Intel_PPCharts = new Chart(IntelPPCharts, {
		type: 'bar',
		data: {
			labels: ['Intel p-vcf (in μs)', 'Intel p-xml (in μs)'],
			datasets: [
				{
					label: "",
					backgroundColor: [color1, color2],
					borderWidth: 10,
					data: [1111, 6000]
				}, {
					label: "",
					backgroundColor: [color1, color2],
					borderWidth: 10,
					data: [7000, 7000]

				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Intel p-vcf and p-xml Benchmarks'
			}
		}
	}
);

var Geekbench3SingleCoreInfoSetChartS    = document.getElementById('Geekbench3_SingleCoreSet-canvas').getContext('2d');
var Geekbench3SingleCoreInfoSetChart = new Chart(Geekbench3SingleCoreInfoSetChartS, {
		type: 'bar',
		data: {
			labels: ['Floating (Score)', 'Integer (Score)', 'Memory (Score)'],
			datasets: [
				{
					label: "",
					backgroundColor: [color1, color2, color3],
					borderWidth: 10,
					data: [1111, 6000, 1111]
				}, {
					label: "",
					backgroundColor: [color1, color2, color3],
					borderWidth: 10,
					data: [7000, 7000, 1111]

				}, {
					label: "",
					backgroundColor: [color1, color2,color3],
					borderWidth: 10,
					data: [7000, 7000, 1111]

				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Geekbench 3.4.1 SingleCoreSet Benchmarks'
			}
		}
	}
);

var Geekbench3MultiCoreInfoSetChartS    = document.getElementById('Geekbench3_MultiCoreSet-canvas').getContext('2d');
var Geekbench3MultiCoreInfoSetChart = new Chart(Geekbench3MultiCoreInfoSetChartS, {
		type: 'bar',
		data: {
			labels: ['Floating (Score)', 'Integer (Score)', 'Memory (Score)'],
			datasets: [
				{
					label: "",
					backgroundColor: [color1, color2, color3],
					borderWidth: 10,
					data: [1111, 6000, 1111]
				}, {
					label: "",
					backgroundColor: [color1, color2, color3],
					borderWidth: 10,
					data: [7000, 7000, 1111]

				}, {
					label: "",
					backgroundColor: [color1, color2,color3],
					borderWidth: 10,
					data: [7000, 7000, 1111]

				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Geekbench 3.4.1 MultiCoreSet Benchmarks'
			}
		}
	}
);

var Geekbench4_MultiCoreSetChartS    = document.getElementById('Geekbench4_MultiCoreSet-canvas').getContext('2d');
var Geekbench4_MultiCoreSetChart = new Chart(Geekbench4_MultiCoreSetChartS, {
		type: 'bar',
		data: {
			labels: ['Crypto (Score)', 'Floatpoint (Score)', 'Integer (Score)', 'Memory (Score)'],
			datasets: [
				{
					label: "",
					backgroundColor: [color1, color2, color3, color4],
					borderWidth: 10,
					data: [1111, 6000, 1111, 1111]
				}, {
					label: "",
					backgroundColor: [color1, color2, color3, color4],
					borderWidth: 10,
					data: [7000, 7000, 1111, 1111]

				}, {
					label: "",
					backgroundColor: [color1, color2,color3, color4],
					borderWidth: 10,
					data: [7000, 7000, 1111, 111]

				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Geekbench 4.0.3 MultiCoreSet Benchmarks'
			}
		}
	}
);

var Geekbench4_SingleCoreSetChartS    = document.getElementById('Geekbench4_SingleCoreSet-canvas').getContext('2d');
var Geekbench4_SingleCoreSetChart = new Chart(Geekbench4_SingleCoreSetChartS, {
		type: 'bar',
		data: {
			labels: ['Crypto (Score)', 'Floatpoint (Score)', 'Integer (Score)', 'Memory (Score)'],
			datasets: [
				{
					label: "",
					backgroundColor: [color1, color2, color3, color4],
					borderWidth: 10,
					data: [1111, 6000, 1111, 1111]
				}, {
					label: "",
					backgroundColor: [color1, color2, color3, color4],
					borderWidth: 10,
					data: [7000, 7000, 1111, 1111]

				}, {
					label: "",
					backgroundColor: [color1, color2,color3, color4],
					borderWidth: 10,
					data: [7000, 7000, 1111, 111]

				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Geekbench 4.0.3 SingleCoreSet Benchmarks'
			}
		}
	}
);


var Geeks3DChartS   = document.getElementById('Geeks3D-canvas').getContext('2d');
var Geeks3DChart = new Chart(Geeks3DChartS, {
		type: 'bar',
		data: {
			labels: ['GPU Furmark / Geeks 3D (Score)'],
			datasets: [
				{
					label: "",
					backgroundColor: color1,
					borderWidth: 10,
					data: [2550]
				}, {
					label: "",
					backgroundColor: color2,
					borderWidth: 10,
					data: [3000]

				}, {
					label: "",
					backgroundColor: color3,
					borderWidth: 10,
					data: [3500]
				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'GPU Furmark Benchmark 1920x1080 (OpenGL: 2.1 Mesa 11.2.2)'
			}
		}
	}
);

var Data_sysbenchMaxPrimeS   = document.getElementById('SysbenchMaxPrime-canvas').getContext('2d');
var SysbenchMaxPrimeChart = new Chart(Data_sysbenchMaxPrimeS, {
		type: 'bar',
		data: {
			labels: ['Sysbench - Total time(s)'],
			datasets: [
				{
					label: "",
					backgroundColor: color1,
					borderWidth: 10,
					data: [2550]
				}, {
					label: "",
					backgroundColor: color2,
					borderWidth: 10,
					data: [3000]

				}, {
					label: "",
					backgroundColor: color3,
					borderWidth: 10,
					data: [3500]
				}
			]
		},
		options: {
			
			
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
	
			title: {
				display: true,


				text: 'Sysbench 1.0.9 (LuaJIT 2.0.4, Number of threads: 8)'
			}
		}
	}
);