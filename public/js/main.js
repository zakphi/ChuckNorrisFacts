$(() => {
  console.log('script loaded')

  const fact = {}

  $('#generate_fact').click(() => {
    console.log('generated random fact')
    $.ajax({
      url: 'https://api.chucknorris.io/jokes/random',
      method: 'GET',
      success: (data) => {
        console.log(data)
        $('section p').text(fact.fact = data.value)
      }
    })
  })

  $('#save_fact').click(() => {
    console.log('fact saved')
  })
  
})