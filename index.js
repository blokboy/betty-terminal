const { 
  screen, 
  box,
  form,
  button,
  text,
  textbox,
} = require('blessed');

const BettyScreen = screen({
  smartCSR: true
});

const LoginForm = form({
  parent: BettyScreen,
  keys: true,
  left: 'center',
  top: 'center',
  width: '50%',
  height: '50%',
  bg: '#e16973',
});

const PhoneNumberInputLabel = text({
  parent: BettyScreen,
  top: 3, 
  left: 5
});

const PhoneNumberInput = textbox({
  parent: LoginForm,
  keys: true,
  left: 'center',
  top: 'center',
  width: '50%',
  height: '10%',
  bg: 'white',
  fg: 'black',
  inputOnFocus: true,
  focus: {
    fg: 'black'
  }
});


BettyScreen.title = 'Betty';

const MainBox = box({
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  content: '{center}{bold}Betty{/bold}{/center}',
  tags: true,
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    bg: '#e16973',
    border: {
      fg: 'white'
    }
  }
});


BettyScreen.key(['escape', 'q', 'C-c'], (ch, key) =>
  process.exit(0)
)

PhoneNumberInput.focus()

//BettyScreen.append(MainBox);
BettyScreen.render();
