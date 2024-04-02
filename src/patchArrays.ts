// @ts-nocheck

const patchArrays = (): void => {
	Array.prototype.count = function () {
		return this.length;
	};
	
	Array.prototype.insert = function (a, b) {
		if (typeof b == 'undefined') {
			this.push(a);
		} else {
			if (typeof a !== 'number') {
				throw new Error('INVALID_ARGUMENT');
			}
			if (a < 0) {
				this.unshift(b);
			} else if (a > this.length) {
				this.push(b);
			} else {
				this.splice(a, 0, b);
			}
		}
		return this;
	};
	
	Array.prototype.remove = function (a) {
		let myEl
		for(let i = 0; i < this.length; i++){
			if(this[i] === a) {
				this.splice(i, 1)
				break
			}
		}
		return this;
	};
};

export default patchArrays;



