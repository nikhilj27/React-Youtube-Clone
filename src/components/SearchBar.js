import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchTerm: ''
    }

    handleChange = (event) => this.setState({ searchTerm: event.target.value });

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top" style={{ top: '0', position: 'fixed', right: '0', left: '0', zIndex: '1030'}}>
                <a className="navbar-brand" style={{ marginLeft: '5%', fontWeight: '500', fontSize: '18px', lineHeight: '0.8', textAlign: 'right' }} href="#">
                    <span><i className="fa fa-youtube-play" aria-hidden="true" style={{ color: 'red' }}></i> YouTube</span><br />
                    <span className="text-muted" style={{fontSize: '10px'}}>Made In ReactJS</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 w-50" onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3 w-100">
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={this.handleChange} />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" onClick={this.handleSubmit} type="button" id="button-addon2">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        )
    }
}

export default SearchBar;