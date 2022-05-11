import './Home.css';

function Home(){
    return (
        <div className="Home">
            <section className='form'>
                <header>
                    <table>
                        <tr>
                            <td align='center'><img src={require('./image/icon.png')} alt="Beauty" resizeMode="contain"/></td>
                        </tr>
                        <tr>      
                            <td><h1>Beauty Partners</h1></td>
                        </tr>
                    </table>
                </header>    
            <form>
                <h3>Torne-se um cliente beauty</h3>
                <p></p>
                <p>E encontre os melhores profissionais da beleza
                em sua região.</p>
                <button className='button'>Cadastre-se agora</button>
            </form>    
            </section>

        <img src={require('./image/beauty.png')} alt="Beauty" resizeMode="contain"/>

        </div>
      );  

} export default Home;