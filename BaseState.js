function BaseState() {

}
BaseState.prototype.stateChange=function (objectContext) {
    if(typeof objectContext.state=== typeof  this){
        objectContext.number+=5;
        objectContext.stateName="In base State";
        document.getElementById("statepatternlog").innerHTML+=JSON.stringify(objectContext);
        objectContext.state= new State1();
    }
}