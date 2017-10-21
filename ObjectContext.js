function ObjectContext(number) {
    this.number=number;
    this.stateName="";
    this.state=new BaseState();
}
ObjectContext.prototype.objectAction=function () {
    this.state.stateChange(this);
}


var objectContext=new ObjectContext(10);