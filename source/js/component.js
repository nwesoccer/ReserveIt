
/** @jsx React.DOM */

var Chat = React.createClass({
    render: function() {
        return (
            <div className="chat">
                New chat {this.props.name}
            </div>
        );
    }
});