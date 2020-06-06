import React, { Component } from 'react';
const ProductContext = React.createContext();

 class ProductProvider extends Component {
     state ={
         modalOpen:false,
     };


    openModal = () =>{
        
        this.setState(()=>{
            return {modalOpen: true };
        });
    };
    closeModal = ()=>{
        this.setState(()=>{
            return { modalOpen:false};
        });
    };
   
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                openModal: this.openModal,
                closeModal: this.closeModal,
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};