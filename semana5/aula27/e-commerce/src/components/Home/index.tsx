import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Home = () => {

    const [dados, setDados] = React.useState<any>()

    React.useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(resposta => setDados(resposta.data))
    }, [])

    //console.log(dados)

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <main className="container text-center my-0">
                <div className="row row-cols-3 row-cols-md-4 mb-6 text-center">
                    {dados?.map((item: any) => (

                        <div key={item.id} className="col">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-header">
                                    <h4 className="my-0 fw-normal ">{item.title}</h4>
                                </div>
                                <div className="card-body">
                                    <img className="img-fluid" src={item.image} alt={item.title} />
                                    <h1 className="card-title pricing-card-title">R$ {item.price}</h1>

                                    <Link to={`/produto/${item.id}`} className="w-100 btn btn-lg btn-outline-primary" >Comprar</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}
export default Home;