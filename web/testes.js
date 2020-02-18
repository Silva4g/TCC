export default class App extends Component {

    state = {
      upload: null
    }
  
    handleForm = (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append('file', this.state.upload);
      data.append('name', 'ana');
      data.append('cpf', '223883');
      data.append('bio', 'nada');
      data.append('password', '123456');
      data.append('susCard','13548532' );
  
      axios.post("http://localhost:3333/user", data)
      .then(res => {
        console.log(res);
      })
    };
  
    handleFile = (e) => {
      this.setState({
        upload: e.target.files[0]
      });
    }
  
    render(){
      return (
        <div className="App">
          <h1>Cadastro de user</h1>
          <form encType="multipart/form-data">
            <input type="file" name="file" onChange={this.handleFile}/>
            <button type="submit" onClick={this.handleForm}>Eviar</button>
          </form>
        </div>
      );
    }
  }