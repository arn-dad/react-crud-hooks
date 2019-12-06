import React from 'react';
import { dummy, example } from '../constant'

const context = React.createContext({ events: dummy, template: { ...example } })

export default context;