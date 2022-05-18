import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class AddProduct extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      sku:'',
      price:'',
      productType:'DVD',
      size:'',
      height:'',
      width:'',
      length:'',
      weight:''
    }
  }

handleChange(e){
  const name=e.target.name;
  const value=e.target.value;
  this.setState({[name]:value});
}

handleSubmit(state){
  let arr = [state.productType,
             state.name,
             state.sku,
             state.price,
             [state.size,state.height,state.width,state.length,state.weight]];
  const postProduct=async()=>{
  await fetch("https://cyril123.000webhostapp.com/r/views/InsertProduct.php", {
            method: "POST", 
            body: JSON.stringify(arr)
          })
          window.location.href='/';
    }
postProduct();
}

  render() {
    return (<>
    <section className='nav'>
        <h1>Add Product</h1>
        <div>
            <Link className='btn' to='' onClick={()=>this.handleSubmit(this.state)}><button>Save</button></Link>
            <Link className='btn' to='/product'><button>Cancel</button></Link>
        </div>
    </section>
    <form id='product_form'>
      <div className='form_input'>
          <label htmlFor="sku">SKU</label>
          <input type="text" id='sku' name='sku' value={this.state.sku} onChange={(e)=>this.handleChange(e)} required/>
      </div>
      <div className='form_input'>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id='name' value={this.state.name} onChange={(e)=>this.handleChange(e)} required />
      </div>
      <div className='form_input'>
          <label htmlFor="price">Price $</label>
          <input type="number" name='price' id='price' step=".01" value={this.state.price} onChange={(e)=>this.handleChange(e)} required />
      </div>
      <div className='form_input'>
          <label id='switch_label' htmlFor="productType">Type Switcher</label>
          <select name="productType" id="productType" onChange={(e)=>this.handleChange(e)}>
              <option value="DVD" id='DVD'>DVD</option>
              <option value="Furniture" id='Furniture'>Furniture</option>
              <option value="Book" id='Book'>Book</option>
          </select>
      </div>
      {this.state.productType==='DVD'&&
      <div className='switch'>
        <p>Please provide size in MB</p>
        <div>
            <label htmlFor="size">Size (MB)</label>
            <input type="number" id='size' name='size' step=".0001" value={this.state.size} onChange={(e)=>this.handleChange(e)} required/>
        </div>
    </div>}
    {this.state.productType==='Furniture'&&
    <div className='switch'>
        <p>Please provide dimension in (HxWxL) format all in centimeter</p>
        <div>
            <label htmlFor="height">Height (CM)</label>
            <input type="number" id='height'  name='height' step=".001" value={this.state.height} onChange={(e)=>this.handleChange(e)} required/>
        </div>
        <div>
            <label htmlFor="width">Width (CM)</label>
            <input type="number" id='width' step=".001" name='width' value={this.state.width} onChange={(e)=>this.handleChange(e)} required/>
        </div>
        <div>
            <label htmlFor="length">Length (CM)</label>
            <input type="number" id='length' step=".001" name='length' value={this.state.length} onChange={(e)=>this.handleChange(e)}  required/>
        </div>
    </div>}
    {this.state.productType==='Book'&&
    <div className='switch'>
        <p>Please provide weight in kilograms (Kg)</p>
        <div>
            <label htmlFor="weight">Weight (Kg)</label>
            <input type="number" id='weight' name='weight' step=".0001" value={this.state.weight} onChange={(e)=>this.handleChange(e)}  required/>
        </div>
    </div>}
    </form>
    <section className='footer'>
        <h4>Scandiweb test</h4>
    </section> 
    </>)
  }
}

export default AddProduct