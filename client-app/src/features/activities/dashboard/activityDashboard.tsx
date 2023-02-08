import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import LoadingComponent from '../../../app/Layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityList from './activityList';

export default observer (function ActivityDashboard() {

    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
        if(activityRegistry.size <= 1)  loadActivities();
    }, [loadActivities])
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>
 
    const {selectedActivity, editMode} = activityStore
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <GridColumn width='6'>
                <h2>Activty filters</h2>
            </GridColumn>
        </Grid>
    )
})