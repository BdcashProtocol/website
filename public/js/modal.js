document.getElementById("button-started").addEventListener("click", function () {
        $.showAlert({
            title: '<div class="row"><div class="col-sm-12">'+
			'<div class="section-heading text-center">'+
			'Get Started'+
			'</div></div></div>',
            body:
            '<div class="row"><div class="col-sm-12 ">'+
			'<div class="section-heading text-center">'+
			'<h3>Follow these 4 steps to get to know the project.</h3>'+
			'</div></div></div>'+
            '<div class="row">'+
            '<div class="col-md-12">'+
            '<div class="download-option-btn text-center">'+
            '<ul>'+
            '<li style="list-style: none;display:inline-block;" ><a href="href="https://github.com/BdcashProtocol/whitepaper-bdcash-protocol" target="_blank""><h1 class="icofont icofont-law-document"></h1>Read WP</a></li>'+
            '<li style="list-style: none;display:inline-block;" ><a href="/donwload"><h1 class="icofont icofont-wallet"></h1>Get Wallets</a></li>'+
            '<li style="list-style: none;display:inline-block;" ><a href="https://coinmarketcap.com/currencies/bdcash/" target="_blank"><h1 class="icofont icofont-checked"></h1>Check CMC</a></li>'+
            '<li style="list-style: none;display:inline-block;" ><a href="/markets"><h1 class="icofont icofont-coins"></h1>Get BDCASH in market</a></li>'+
            ' </ul>'+
            '</div></div></div>'
        
        })
    })