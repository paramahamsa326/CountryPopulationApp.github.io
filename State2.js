function State2() {

}
State2.prototype=Object.assign({}, BaseState.prototype);

State2.prototype.stateChange=function (objectContext) {
    if(typeof objectContext===typeof this){
        objectContext.number+=3;
        objectContext.stateName="State2";
        console.log(JSON.stringify(objectContext));
        objectContext.state=new State3();
    }
}