function State3() {

}
State3.prototype=Object.assign({}, BaseState.prototype);

State3.prototype.stateChange=function (objectContext) {
    if(typeof objectContext===typeof this){
        objectContext.number+=4;

        objectContext.stateName="State3";
        console.log(JSON.stringify(objectContext));
        objectContext.state=new State1();
    }
}