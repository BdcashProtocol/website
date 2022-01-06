document.getElementById("button-started").addEventListener("click", function () {
        $.showAlert({
            title: '<div class="row"><div class="col-sm-12">'+
			'<div class="section-heading text-center">'+
			'Get Started'+
			'</div></div></div>',
            body:
            '<div class="row"><div class="col-sm-12">'+
			'<div class="section-heading text-center pb-10">'+
			'<p>Follow these 4 steps to get to know the project.</p>'+
			'</div></div></div>'+
            '<div class="row">'+
            '<div class="col-md-12">'+
            '<div class="download-option-btn text-center">'+
            '<ul>'+
            '<li><a href="href="https://github.com/BdcashProtocol/whitepaper-bdcash-protocol" target="_blank""><h1 class="icofont icofont-law-document"></h1>Read WP</a></li>'+
            '<li><a href="/donwload"><h1 class="icofont icofont-wallet"></h1>Get Wallets</a></li>'+
            '<li><a href="https://coinmarketcap.com/currencies/bdcash/" target="_blank"><h1 class="icofont icofont-checked"></h1>Check CMC</a></li>'+
            '<li><a href="/markets"><h1 class="icofont icofont-coins"></h1>Get BDCASH in market</a></li>'+
            ' </ul>'+
            '</div></div></div>'
        
        })
    })