import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Product extends Component {
    constructor() {
        super()
        this.state = {
          products: [],
          deletes:[]
        }
      }

massDelete(deletes){
    const Delete = async()=>{
        await fetch("https://cyril123.000webhostapp.com/r/views/DeleteProduct.php", {
            method: "POST", 
            body: JSON.stringify(deletes)
          }).then(res=>res.text()).then(data=>{
            window.location.reload(false);
          })
    }
    Delete()
}

handleDeleteSelection(sku){
const newDeletes = this.state.deletes.filter(SKU=>SKU!==sku);
    if(this.state.deletes.length!==newDeletes.length){
        this.setState({deletes:newDeletes});
    }else{
        this.setState({deletes:[...this.state.deletes,sku]});
    }
}

componentDidMount() {
    let arr = [];
    const Data = async() => await fetch('https://cyril123.000webhostapp.com/r/views/ViewProducts.php').then(res=>res.json()).then(data=>{
                            for(const key in data){
                                arr.push(data[key])
                            }
                            this.setState({products:arr})
                        });
    Data()
  }

  render() {
    return (<>
    <section className='nav'>
        <h1>Product List</h1>
        <div>
            <Link className='btn' to='/add/product'><button>ADD</button></Link>
            <Link className='btn' to='' onClick={()=>this.massDelete(this.state.deletes)} ><button id="delete-product-btn">MASS DELETE</button></Link>
        </div>
    </section>
    <section className='product_list'>
        {
        this.state.products.map((product,index)=>(
            <div className='card' key={index}>
                <input type="checkbox" className='delete-checkbox' value={product.SKU} onClick={()=>this.handleDeleteSelection(product.SKU)}/>
                <h5>{product.SKU}</h5>
                <h4>{product.name}</h4>
                <h5>{'$'+product.price}</h5>
                <h5>{product.unit}</h5>
            </div>
        ))
        }
    </section>
    <section className='footer'>
        <h4>Scandiweb test</h4>
    </section>   
    </>)
  }
}

export default Product