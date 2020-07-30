import React from 'react';
import { Switch, Route } from 'react-router';
import './App.scss';
import AppLayout from './layout/AppLayout/AppLayout';
import DashboardPage from './pages/Dashboard/Dashboard.page';
import CoursesPage from './pages/Courses/Courses.page';
import TestsPage from './pages/Tests/Tests.page';
import ResourcesPage from './pages/Resources/Resources.page';
import CalendarPage from './pages/Calendar/Calendar.page';
import EntryLayout from './layout/EntryLayout/EntryLayout';
import EntryPage from './pages/Entry/Entry.page';
import TestPage from './pages/Test/Test.page';
import CoursePage from './pages/Course/Course.page';

function App() {
    return (
        <Switch>
            <Route exact path={'/quest'}>
                <EntryLayout>
                    <EntryPage />
                </EntryLayout>
            </Route>
            <Route exact path={'/'}>
                <AppLayout>
                    <DashboardPage />
                </AppLayout>
            </Route>
            <Route exact path={'/courses'}>
                <AppLayout>
                    <CoursesPage />
                </AppLayout>
            </Route>
            <Route path={'/courses/:id'}>
                <AppLayout>
                    <CoursePage />
                </AppLayout>
            </Route>
            <Route exact path={'/tests'}>
                <AppLayout>
                    <TestsPage />
                </AppLayout>
            </Route>
            <Route path={'/tests/:id'}>
                <AppLayout>
                    <TestPage />
                </AppLayout>
            </Route>
            <Route path={'/resources'}>
                <AppLayout>
                    <ResourcesPage />
                </AppLayout>
            </Route>
            <Route path={'/calendar'}>
                <AppLayout>
                    <CalendarPage />
                </AppLayout>
            </Route>
        </Switch>
    );
}

export default App;
