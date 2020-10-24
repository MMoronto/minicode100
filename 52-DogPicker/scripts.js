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

    favoriteDog = id => {
      const {databse, dogs } = this.state;
      const dog = dogs.find(d => d.id == id);

      // increase the likes??
      database.child(id).update({ likes: dog.likes + 1 });
      this.getRandomDogs();
      this.getDogs();
    };

    getRandomDogs = () => {
      const { dogs } = this.state;

      if (!dogs) {
        return;
      }

      const idx1 = Math.floor(Math.random() * dogs.length);
      const idx2 = Math.floor(Math.random() * dogs.length);

      this.setState({ idx1, idx2});
    };

    getMedal = idx => {};

    render() {}

}

ReactDOM.render(<App />, document.getElementById('app'));
