import React, { Component } from 'react';
import RepoList from './RepoList';
import Logo from '../../images/GitHub-Mark-64px.png'
import './Portfolio.scss';

const USER_SERVICE_URL = 'https://api.github.com/users/Kenshikento/repos';

class Portfolio extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = { 
            isFetching: false,
            repo: [],
            key: [],
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        this.fetchUsers();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    fetchUsersWithFetchAPI = () => {
        this.setState({...this.state, isFetching: true});

        fetch(USER_SERVICE_URL)
            .then(response => response.json())
            .then(result => {
                let groupLang = this.groupBy(result,'language');
                let keys = [];
                for(const[key] of Object.entries(groupLang)) {
                    keys[key] = false;
                }

                this.setState({repo: groupLang, isFetching: false, key:keys})
            })
            .catch(e => {
                console.log(e); // TODO: to remove
                this.setState({...this.state, isFetching: false});
            });
    };

    fetchUsers = this.fetchUsersWithFetchAPI;
    
    groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          );
          return result;
        }, {});
    };

    toggle =  (e, name) => {
        if(this.state.key[name] === false) {
            this.setState(prevState => {
                let key = Object.assign({}, prevState.key);
                key[name] = true;               
                return { key }; 
            });
        } else {
            this.setState(prevState => {
                let key = Object.assign({}, prevState.key); 
                key[name] = false;                
                return { key }; 
            });
        }
    }

    render() {
        return (
            <ul>
                <div>
                    <div className="header">
                        <h1>List of GitHub repositories</h1>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href="https://github.com/kenshikento?tab=repositories";
                            }}
                        >
                            <img src = {Logo} alt ="Logo"/>
                        </button>
                    </div>
                    <div className="list">
                        {Object.entries(this.state.repo).map((item) => { 
                            let name = item[0];
                            let list = item[1];

                            return (
                                <div className="block"
                                    key={name}
                                >
                                    <div className="title" onClick={(e)=> this.toggle(e,name)}> 
                                        <h1> {name === 'null' ? 'Third Party Forks' : name} {} </h1>
                                    </div>

                                    { list.map((repo) => {                            
                                        return (
                                            <RepoList
                                                key={repo.id}
                                                name={repo.name}
                                                link={repo.svn_url}
                                                title={name}
                                                hidden={this.state.key[name]}
                                            />
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>     
                </div>           
            </ul>
        )
    }
}

export default Portfolio;