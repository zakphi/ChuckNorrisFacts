$(() => {
  console.log('script loaded')

  const fact = {}

  $('#save_fact').attr('disabled', true)

  $('#generate_fact').click(() => {
    console.log('generated random fact')
    $.ajax({
      url: 'https://api.icndb.com/jokes/random/?escape=javascript',
      method: 'GET',
      success: (data) => {
        fact.fact = data.value.joke
        console.log(fact.fact)
        $('section p').text(fact.fact)
      }
    })
    $('#save_fact').attr('disabled', false)
  })

  $('#save_fact').click(() => {
    console.log('fact saved')

    $.ajax({
      url: '/',
      method: 'POST',
      data: fact
    }).done(data => {
      window.location = '/'
    })

    $('#save_fact').attr('disabled', true)
  })
  
})