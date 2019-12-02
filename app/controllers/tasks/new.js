import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addTask: function() {
            let title = this.get('title');
            let date = this.get('date');
            let description = this.get('description');
            
            //create new task...
            let newTask = this.transitionToRoute.createRecord();
        }
    }
});
