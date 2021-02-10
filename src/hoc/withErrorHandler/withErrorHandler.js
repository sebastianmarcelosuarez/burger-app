import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state = {
            error:null
        }

        constructor(props) {
            super(props);
            // No llames this.setState() aquí!
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error : null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res,error => {
              this.setState({error:error})  
            });
          }

       componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.request.eject(this.resInterceptor)
  
        }
        
        // componentDidMount() { }

        errorConfirmedHandler = () => {
            this.setState({error:null})
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                            modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}>
                </WrappedComponent>
                </Aux>
               
            );   
        }
    } 
}

export default withErrorHandler;