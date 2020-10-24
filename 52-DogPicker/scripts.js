class App extends React.Component {
  state = {
    dogs: [],
    database: undefined,
    idx1: undefined,
    idx2: undefined
  };

  componentDidMount = () => {
    const database = firebase.database().ref('/dogs');

    this.setState(
    {
      database
    },
    () => {
      this.getDogs();
    }
  );

  setTimeout(() => {
    this.getRandomDogs();
  }, 2000);  
};

getDogs = () => {
  const {database} = this.state;

  database.on('value', snapshot => {
    const dogs = [];
    const dogsObj = snapshot.val();
    Object.keys(dogsObj).forEach(key => {
      dogs.push(dogObj[key]);
    });

    this.setState({
      dogs
    });
  });
};


}


