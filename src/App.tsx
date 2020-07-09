import React from 'react';
import { Switch, Route } from 'react-router';
import './App.scss';
import AppLayout from './layout/AppLayout';
import DashboardPage from './pages/Dashboard/Dashboard.page';
import CoursesPage from './pages/Courses/Courses.page';
import TestsPage from './pages/Tests/Tests.page';
import ResourcesPage from './pages/Resources/Resources.page';
import CalendarPage from './pages/Calendar/Calendar.page';

function App() {
    return (
        <AppLayout>
            <Switch>
                <Route exact path={'/'}>
                    <DashboardPage />
                </Route>
                <Route path={'/courses'}>
                    <CoursesPage />
                </Route>
                <Route path={'/tests'}>
                    <TestsPage />
                </Route>
                <Route path={'/resources'}>
                    <ResourcesPage />
                </Route>
                <Route path={'/calendar'}>
                    <CalendarPage />
                </Route>
            </Switch>
        </AppLayout>
    );
}

export default App;
