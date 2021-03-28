import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { connect } from 'react-redux';
import { editScenario, removeScenario } from '../../actions/scenarios';

const Scenario = ({ id, name, isActive, interval, nodes, editScenario, removeScenario }) => {
    const handleToggleActvie = () => {
        editScenario(id, {isActive: !isActive});
    };

    const handleRemoveScenario = () => {
        removeScenario(id);
    };

    return (
        <ListItem className="scenario" button component={NavLink} to={`/sketchpad/${id}`}>
            <ListItemIcon>
                <AlarmIcon />
            </ListItemIcon>

            <ListItemText primary={name} />

            <ListItemSecondaryAction className="control">
                <AccessTimeIcon className="item" />

                <Switch
                    edge="end"
                    onChange={handleToggleActvie}
                    checked={isActive}
                    color="primary"
                    className="item"
                />
                
                <IconButton aria-label="delete" className="item" color="secondary" onClick={handleRemoveScenario}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

const mapDispatchToProps = (dispatch) => ({
    editScenario: (type, data) => dispatch(editScenario(type, data)),
    removeScenario: (type, data) => dispatch(removeScenario(type, data)),
});

export default connect(null, mapDispatchToProps)(Scenario);
