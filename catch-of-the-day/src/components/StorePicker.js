import React from 'react';

class StorePicker extends React.Component {
    render() {
        //this is fine
        return (
            <form className="store-selector">
            {/*jsx comments*/}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name"/>
                <button type="submit">Visit</button>
            
            </form>
        )
    }
}

export default StorePicker;