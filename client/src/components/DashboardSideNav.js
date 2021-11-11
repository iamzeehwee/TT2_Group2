import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { Component } from 'react';
import Constants from '../Constants';

class DashboardSideNav extends Component {
  handleListItemClick = (index) => {
    this.props.setIndex(index)
  };

  render() {
    const styles = {
      sideNav: {
        top: 0,
        height: '100%',
        width: this.props.drawerWidth,
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        position: 'fixed',
        overflowY: 'auto',
        background: 'white',
        zIndex: '8'
      },
      navBar: {
        minHeight: '150px'
      }
    };

    return (
      <>
        <div style={styles.sideNav}>
          <div style={styles.navBar} />
          <List component="nav">
            <ListItem
              button
              selected={this.props.selectedIndex === 0}
              onClick={() => this.handleListItemClick(0)}
            >
              <ListItemText primary={'Project 1'} />
            </ListItem>
            <ListItem
              button
              selected={this.props.selectedIndex === 1}
              onClick={() => this.handleListItemClick(1)}
            >
              <ListItemText primary={'Project 2'} />
            </ListItem>
          </List>
        </div>
      </>
    );
  }
}

export default DashboardSideNav;
