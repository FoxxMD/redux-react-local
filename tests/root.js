/* global describe, it, beforeEach, afterEach */

import React, {PropTypes, Component} from 'react' ;

import {render, unmountComponentAtNode} from 'react-dom';

import {createStore, combineReducers} from 'redux';
import {connect, Provider} from 'react-redux';


import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);


describe('disto', () => {
  it('lives');

  it('accepts reducers');
  it('accepts middleware');
  it('accepts an initial state');

  it('can define sagas');
  it('can do optimistic updates');
  it('can do local annotations');

  it('batches updates');
  it('ensures FSA shapes');

});