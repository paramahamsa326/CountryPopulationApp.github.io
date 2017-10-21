function BaseState() {

}
BaseState.prototype.stateChange=function (objectContext) {
    if(typeof objectContext.state=== typeof  this){
        objectContext.number+=5;
        objectContext.stateName="In base State"
        console.log(JSON.stringify(objectContext));
        objectContext.state= new State1();
    }
}