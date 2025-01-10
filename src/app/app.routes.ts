import { Routes } from '@angular/router';
import { BridgePatternDemoComponent } from './patterns/bridge/bridge-pattern-demo/bridge-pattern-demo.component';

export const routes: Routes = [
    {
        path: 'patterns',
        children: [
            {
                path: 'bridge',
                component: BridgePatternDemoComponent
            }
        ]
    }
];
