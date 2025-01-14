import { Routes } from '@angular/router';
import { BridgePatternDemoComponent } from './patterns/bridge/bridge-pattern-demo/bridge-pattern-demo.component';
import { AdapterPatternDemoComponent } from './patterns/adapter/adapter-pattern-demo/adapter-pattern-demo.component';

export const routes: Routes = [
    {
        path: 'patterns',
        children: [
            {
                path: 'bridge',
                component: BridgePatternDemoComponent
            },
            {
                path: 'adapter',
                component: AdapterPatternDemoComponent
            }
        ]
    }
];
