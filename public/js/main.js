$(() => {
  console.log('script loaded')

  const fact = {}

  $('#generate_fact').attr('disabled', true)

  $('.index form input').on('change', () => {
    $('#generate_fact').attr('disabled', false)
  })

  $('#generate_fact').click((e) => {
    e.preventDefault()

    let fact_type = $('input[name=fact_type]:checked').val()

    let url = ''

    switch(fact_type){
      case 'random':
        url = 'https://api.icndb.com/jokes/random/?escape=javascript'
        break
      case 'general':
        url = 'https://api.icndb.com/jokes/random/?escape=javascript&exclude=[nerdy, explicit]'
        break
      case 'nerdy':
        url = 'https://api.icndb.com/jokes/random/?escape=javascript&limitTo=[nerdy]'
        break
      case 'explicit':
        url = 'https://api.icndb.com/jokes/random/?escape=javascript&limitTo=[explicit]'
    }

    $.ajax({
      url: url,
      method: 'GET',
      success: (data) => {
        fact.fact = data.value.joke
        $('section p').text(fact.fact)
        if($('section p').text() !== ''){
          $('span').html("<button id='save_fact'>save fact</button>")
        }
      }
    })
    $('#save_fact').attr('disabled', false)
  })

  $(document).on("click", "#save_fact", function(){
    console.log('fact saved')

    $.ajax({
      url: '/',
      method: 'POST',
      data: fact
    })

    $('#save_fact').attr('disabled', true)
  });
  
})