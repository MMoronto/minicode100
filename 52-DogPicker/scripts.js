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

    getMedal = idx => {
        switch (idx) {
            case 0;
                return (
                    <p className='place place-1'>
                      <i className='fas fa-medal'></i>
                    </p>
                  );
            case 1;
                return (
                    <p className='place place-2'>
                      <i className='fas fa-medal'></i>
                    </p>
                  );
            case 2;
                return (
                    <p className='place place-3'>
                      <i className='fas fa-medal'></i>
                    </p>
                  );
            default:
                return <p className='place'>{idx + 1}</p>;                                  
        }
    };

    render() {
        const { dogs, idx1, idx2 } = this.state;
        const dog1 = dogs[idx1];
        const dog2 = dogs[idx2];

        if (dogs.length === 0 || !idx1 || !idx2) return <h1>Loading data...</h1>;

        return (
            <div className='main'>
                <h1 className='text-center'></h1>
                <div className='container text-center'></div>
                <h2></h2>
                <table class='leaderboard'></table>
            </div>
          );
    }

}

ReactDOM.render(<App />, document.getElementById('app'));
