	let myArray = [{
    'machine_name': "Auto Winding Machine",
    'machine_id': "machine001",
    'current': "0",
    'voltage': "0",
    'power_factor': "0",
    'active_power': "0.0",
    'apparent_power': "0.0",
    'reactive_power': "0.0",
    'daily_energy': "0.0",
    'monthly_energy': "0",
    'yearly_energy': "0",
    'idle_daily': "0",
    'idle_monthly': "0",
    'idle_yearly': "0",
  },
  {
    'machine_name': "Boiler Machine",
    'machine_id': "machine004",
    'current': "0",
    'voltage': "0",
    'power_factor': "0",
    'active_power': "0.0",
    'apparent_power': "0.0",
    'reactive_power': "0.0",
    'daily_energy': "0.0",
    'monthly_energy': "0",
    'yearly_energy': "0",
    'idle_daily': "0",
    'idle_monthly': "0",
    'idle_yearly': "0",
  },
	]
	
	dynamicTable(myArray)



	function dynamicTable(tdata){
		let table = document.getElementById('Table')
		for (let i = 0; i < tdata.length; i++){
			var row = `<tr>
							<td>${tdata[i].machine_name}</td>
							<td>${tdata[i].machine_id}</td>
							<td>${tdata[i].current}</td>
							<td>${tdata[i].voltage}</td>
							<td>${tdata[i].power_factor}</td>
							<td>${tdata[i].active_power}</td>
							<td>${tdata[i].apparent_power}</td>
							<td>${tdata[i].reactive_power}</td>
							<td>${tdata[i].daily_energy}</td>
							<td>${tdata[i].monthly_energy}</td>
							<td>${tdata[i].yearly_energy}</td>
							<td>${tdata[i].idle_daily}</td>
							<td>${tdata[i].idle_monthly}</td>
							<td>${tdata[i].idle_yearly}</td>
					  </tr>`
			table.innerHTML += row


		}
	}