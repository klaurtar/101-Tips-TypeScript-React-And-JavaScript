// .eslintrc.json
// {
//   ...
//   "rules": {
//     ...
//     "import/order": [
//       "error",
//       {
//         "newlines-between": "always",
//         "groups": [
//           ["builtin", "external"],
//           ["parent", "sibling", "index"]
//         ]
//       }
//     ]
//   },
//   ...
// }

// Group 1: External modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Group 2: Newline separating external from parent/sibling/index
import AppHeader from './AppHeader';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import './App.css';
