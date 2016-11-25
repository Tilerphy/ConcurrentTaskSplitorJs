
var xtask = function(){
	this.all = new Map();
	this.pushTask = (task)=>{
		
		this.all.set(task.key, this.fixTask(task));
	};

	this.pushTasks = (tasks)=>{
		for(var task of tasks){
			this.all.set(task.key, this.fixTask(task));
		}
	};

	this.fixTask = (task)=>{
		task.preActionsSet = new Set();
		for(var key of task.preActions){
			task.preActionsSet.add(key);
		}
                task.postActionsSet = new Set();
		//TODO: backward implementation
		//for(var key of task.postActions){
		//	task.postActionsSet.add(key);
		//}
		return task;
	};

	this.fixRelationship = ()=>{
		for(var pKey of this.all.keys()){
			var pValue = this.all.get(pKey);		
			for(var preAction of pValue.preActionsSet){
				this.all.get(preAction).postActionsSet.add(pKey);
			}
		}

		return this;
	};

	this.removeTasks = (keys)=>{
		for(var key of keys){
			for(var pKey of this.all.keys()){
				var pValue = this.all.get(pKey);
				if(pValue.preActionsSet.has(key)){
					pValue.preActionsSet.delete(key);
				}

				if(pValue.postActionsSet.has(key)){
					pValue.postActionsSet.delete(key);
				}
			}
			this.all.delete(key);
		}
	};

	this.peekXTasks = ()=>{
		var results = [];
		for(var pKey of this.all.keys()){
			var pValue = this.all.get(pKey);
			if(pValue.preActionsSet.size == 0){
				results[results.length] = pKey;
			}
		}
		return results;
	};

	this.popXTasks = ()=>{
		var results = this.peekXTasks();
		this.removeTasks(results);
		return results;
	};
}

module.exports = xtask;

