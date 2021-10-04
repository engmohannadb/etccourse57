(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.taskobject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_66 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(66).call(this.frame_66).wait(73));

	// Layer 3
	this.instance = new lib.Chart("synched",0,false);
	this.instance.setTransform(577.3,356.1,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(140));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("EA7IgasIAAKrIAAKsIAAKpIAAKsIAAKtIzuAAIztAAIztAAIzsAAIzuAAIztAAIAAqtIAAqsIAAqpIAAqsIAAqrITtAAITuAAITsAAITtAAITtAAgEA7IgFVIzuAAIAAKpITuAAEA7IgQBIzuAAIAAKsEAnagasIAAKrAAAFUITtAAIAAqpIztAAIAAKpIAAKsIzsAAIAAKtATtlVIAAqsIztAAIAAKsAAA6sIAAKrIzsAAIAAKsITsAAATt6sIAAKrITtAAEAnaAatIAAqtIztAAIAAKtATtQAIztAAIAAKtEAnaAFUIAAKsITuAAEAnaAFUIztAAIAAKsATtlVITtAAEgnaAFUITuAAIAAqpIzuAAgEg7HAFUITtAAEg7HgFVITtAAIAAqsIztAAEgnagasIAAKrITuAAIAAqrEg7HAQAITtAAIAAqsAzsQAIzuAAIAAKtAAAFUIzsAAIAAKs");
	this.shape.setTransform(730.5,354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(140));

	// Layer 2
	this.ans_16 = new lib._002copy8();
	this.ans_16.setTransform(1045.9,490.7);

	this.ans_21 = new lib._004copy4();
	this.ans_21.setTransform(919.7,490.7);

	this.ans_7 = new lib._001copy7();
	this.ans_7.setTransform(793.5,490.7);

	this.ans_22 = new lib._004copy3();
	this.ans_22.setTransform(667.4,490.7);

	this.ans_8 = new lib._001copy8();
	this.ans_8.setTransform(541.2,490.7);

	this.ans_17 = new lib._002copy7();
	this.ans_17.setTransform(415.1,490.7);

	this.ans_6 = new lib._001copy6();
	this.ans_6.setTransform(415.1,422.3);

	this.ans_15 = new lib._002copy6();
	this.ans_15.setTransform(541.2,422.3);

	this.ans_29 = new lib._003copy6();
	this.ans_29.setTransform(667.4,422.3);

	this.ans_28 = new lib._003copy5();
	this.ans_28.setTransform(793.5,422.3);

	this.ans_14 = new lib._002copy5();
	this.ans_14.setTransform(919.7,422.3);

	this.ans_5 = new lib._001copy5();
	this.ans_5.setTransform(1045.9,422.3);

	this.ans_13 = new lib._002copy4();
	this.ans_13.setTransform(919.7,353.9);

	this.ans_25 = new lib._003copy4();
	this.ans_25.setTransform(793.5,353.9);

	this.ans_26 = new lib._003copy3();
	this.ans_26.setTransform(667.4,353.9);

	this.ans_4 = new lib._001copy4();
	this.ans_4.setTransform(541.2,353.9);

	this.ans_27 = new lib._003copy2();
	this.ans_27.setTransform(415.1,353.9);

	this.ans_2 = new lib._001copy2();
	this.ans_2.setTransform(793.5,285.6);

	this.ans_12 = new lib._002copy2();
	this.ans_12.setTransform(667.4,285.6);

	this.ans_19 = new lib._004copy();
	this.ans_19.setTransform(541.2,285.6);

	this.ans_3 = new lib._001copy3();
	this.ans_3.setTransform(415.1,285.6);

	this.ans_18 = new lib._004();
	this.ans_18.setTransform(415.1,217.2);

	this.ans_23 = new lib._003();
	this.ans_23.setTransform(541.2,217.2);

	this.ans_1 = new lib._001copy();
	this.ans_1.setTransform(667.4,217.2);

	this.ans_10 = new lib._002copy();
	this.ans_10.setTransform(793.5,217.2);

	this.ans_9 = new lib._002();
	this.ans_9.setTransform(919.7,217.2);

	this.ans_24 = new lib._003copy();
	this.ans_24.setTransform(919.7,285.6);

	this.ans_20 = new lib._004copy2();
	this.ans_20.setTransform(1045.9,353.9);

	this.ans_11 = new lib._002copy3();
	this.ans_11.setTransform(1045.9,285.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ans_11},{t:this.ans_20},{t:this.ans_24},{t:this.ans_9},{t:this.ans_10},{t:this.ans_1},{t:this.ans_23},{t:this.ans_18},{t:this.ans_3},{t:this.ans_19},{t:this.ans_12},{t:this.ans_2},{t:this.ans_27},{t:this.ans_4},{t:this.ans_26},{t:this.ans_25},{t:this.ans_13},{t:this.ans_5},{t:this.ans_14},{t:this.ans_28},{t:this.ans_29},{t:this.ans_15},{t:this.ans_6},{t:this.ans_17},{t:this.ans_8},{t:this.ans_22},{t:this.ans_7},{t:this.ans_21},{t:this.ans_16}]}).wait(140));

	// 001
	this.restart_button = new lib.bubble2blue();
	this.restart_button.setTransform(727.5,585.4,1.772,1.772);
	new cjs.ButtonHelper(this.restart_button, 0, 1, 2, false, new lib.bubble2blue(), 3);

	this.ans_0 = new lib._001();
	this.ans_0.setTransform(1045.5,217.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ans_0},{t:this.restart_button}]}).wait(140));

	// Layer 7
	this.counter_3 = new lib.Symbol41copy3();
	this.counter_3.setTransform(108.2,487.3);

	this.counter_2 = new lib.Symbol41copy2();
	this.counter_2.setTransform(108.2,421.2);

	this.counter_1 = new lib.Symbol41copy();
	this.counter_1.setTransform(108.2,351.2);

	this.counter_0 = new lib.Symbol41();
	this.counter_0.setTransform(108.2,285.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.counter_0},{t:this.counter_1},{t:this.counter_2},{t:this.counter_3}]},66).wait(74));

	// Layer 9
	this.result = new lib.Symbol2();
	this.result.setTransform(85.4,543.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D0727").s().p("AklBNQgLgHAAgQQAAgIABgJIAGgRIAIgQIADACQgHAOgBAIQgCAIAAAHQAAAMAIAGQAJAGAPAAQAUAAAOgGQASgIAAgPQABgKgEgIQgDgHgFgHIAIgSQAFAIACAEQACAJAAAPIACAAQALAAAKgEQAJgDAJgHIARgKQAJgFAGgCQAIgCAIAAQAOAAAGAHQAGAGAAAMIAAAIIAMAAQAIAAADgBQAGgCAAgHIAAgGIgBgGIADgEQAEALAGAHQAHAIAIAAQAIAAALgEQAMgEAGgGIASgKQAHgFAHgCQAHgCAJAAQAOAAAGAHQAGAGAAAMIAAAIIBJAAQgKgIgHgEQgJgFgGgDQgJgCgIAAIgKAAQADgFAFgEQAHgHAKAAQAJAAAOAKQAHAEAPANQAMAKAEABIAwAAQgBgLgCgGQgCgFgHgGIAHgPQAIAIABAFQADAGAAARIAAAHIAfAAIgLhRIgFgCIABgNQABgGADgFIABABQAAAGAHACIAJAEIAAALIgDAIIgEgCIALBLIAAATIk3AAQgGAAgEgCQgEgBgFgDQgEAEgEABQgEABgJAAIiAAAQgDAUgLALQgOAMgcAAQgUAAgKgHgAARANIgUALIArAAQALAAAEgCQAFgCABgDQgBgFgFgDQgGgDgJAAQgJAAgOAHgAiOAKIgQAHIgOAHIAtAAQAJAAAFgCQAHgCAAgDQAAgFgHgDQgGgDgHAAQgHAAgJAEgAEnArIAAgHIABgFIgCgcIgEgkIgDgZIAEgJIAFgJIAEAeIAEAjIACAbQAAAIgDAHIgGANgAC4gnIAIgOIAQAIIgIAPgABwgqIAHgOIAQAIIgHAOgADPgwIAHgOIARAJIgIAOg");
	this.shape_1.setTransform(252.4,210.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAHQgHgDgDgEIAFgFQADgDADgBIAGAJQADADABAGIgBABQgFgBgFgCg");
	this.shape_2.setTransform(269,554.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D0727").s().p("AjdBgQgTgCgKgJQgOgKAAgUQAAgNAFgJQADgIAFgHIAKgKQgKgFgEgDQgHgGgBgLQABgLAIgKQAKgLAOAAQAHAAAHAEIAMAIIgTABQgNACgJADQgJAEgBAFQAAAGAMAFQAJAFAMACIATgJQALgEAKgDIgDAPIgdAKQgTAJgJAJQgNALAAAOQAAANAKAIQAKAHARADQAOACAVAAIAJAAIAJAAIAAABIgYAQQgUAAgMgCgAiABGIgNgEIgMgEIABgEIAMADIAKABQAMAAALgGQAIgFAJgJIAMgPIgBAAQgNAAgGgEQgIgFAAgLQAAgIAFgIQAFgKAJAAQAJAAADAKQADAHAAAMIAIAAQAJAAAHgEQAFgEAEgEQAGgJAJgGQAIgGAHgBQAGAKADAIQAFAJAAAHIBJAAQgKgIgHgCQgJgFgGgDQgIgCgJAAIgJAAQACgHAFgEQAHgHAKAAQAJAAAOAKQAHAFAPANQAMAJAEABIAOAAQAJAAAHgEQAGgEAEgEQAFgJAKgGQAHgGAGgBQAIAKADAIQAGAJAAAHIAfAAIgLhRIgFgCIABgNQABgGACgFIACABQAAAGAGACIAKAEIgBALIgBAIIgFgCIAMBLIAAATIg0AAQgHAAgIgDQgKgDgHgGQgGAHgGADQgFACgMAAIh7AAQgGAAgIgDQgKgDgHgGQgFAHgHADQgGACgKAAIgJAAQgCANgKANQgOASgQAAIgOgBgAhfgCQAAABAAAAQgBABAAAAQAAAAAAAAQAAAAAAABQAAAFADACQAFADAJAAIAAgBIABAAQgDgJgDgBQgCgDgEAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAgBAAgAChgGIgGAGQAEACAGADQAHADAGABIABgBQgCgGgDgDIgFgKQgFABgDAEgAgWgGIgFAGQADACAHADQAGADAGABIAAgBQgBgGgCgDIgHgKQgEABgDAEgAAmA2IAIgOIAQAIIgIAOgAD9AdIABgHIAAgFIgBgaIgEgmIgDgZIAFgJIAEgJIAEAeIAEAjIABAbQAAAIgCAHIgHANg");
	this.shape_3.setTransform(252.3,554.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D0727").s().p("AgvBUIgPgFIgNgEIACgFIANADIANACQAMAAAOgIQAMgIAJgLQAGgLAAgJQAAgIgFgIQgBgIgHgFIAGgPQAGAIAEAHQAFAHAAAJIAAAHIBDAAQgHgKgJgIQgIgFgPgJIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgTAHQgKAFAAACQAAACAHAFIAHAFQAPAMALAMQAMALAHAOIAqAAQAAgLgCgGQgDgFgGgFIAHgQQAHAIACAGQADAHAAAPIAAAHIAfAAIgMhQIgEgDIABgNQAAgFADgGIABABQABAGAGACIAKAEIgBALIgCAIIgFgCIAMBLIAAATIipAAQAAALgKALQgGALgMAHQgLAHgIAAQgGAAgIgCgAi7BUIgOgFIgOgEIACgFIAOADIAMACQANAAANgIQAMgIAJgLQAJgLgBgJQABgIgFgIQgDgIgHgFIAFgPQAIAIAFAHQAEAHAAAJIAAAYQAAALgKALQgHALgMAHQgLAHgIAAQgGAAgJgCgADNApIAAgHIABgEIgBgdIgFgkIgDgYIAFgJIAEgKIAFAeIAEAjIABAbQAAAIgDAIIgGAMgAhmApIABgHIAAgEIgBgdIgFgkIgCgYIAEgJIAFgKIADAeIAFAjIABAbQAAAIgDAIIgGAMgABfgoIAIgPIAPAIIgHAPgAB1gxIAIgPIAQAJIgIAOg");
	this.shape_4.setTransform(106.8,211.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C0343E").ss(2).p("A2gVXIAAquIAAqpIAAqsIAAqrIAAqsIZPAAITyAAIAAKsIAAKrIAAKsIAAKpIAAKuIAAKtIzyAAIgJAAI4+AAIgIAAgACvqsIAAKsITyAAAWh1XIzyAAIAAKrITyAAA2g1XIZPAAIAAqsA2gqsIZPAAA2gAAIZPAAAWhVXIzyAAIAAKtACvKpITyAAACvKpIAAKuI5PAAA2gKpIZPAAIAAqp");
	this.shape_5.setTransform(171.5,388.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EACvAgEIAAquITyAAIAAKugAIoZTQgJAKAAALQAAALAIAIQAEADAJAFIgKAKQgFAGgDAIQgEAKAAANQAAATANALQALAIATADQALACAUAAIAZgQIAAgBIgJAAIgJAAQgVAAgOgCQgSgDgJgHQgKgIAAgOQAAgNAMgMQAJgJATgIIAdgMIAEgPQgLADgKADIgUAJQgLgCgKgEQgLgFAAgGQAAgGAKgEQAIgDANgBIATgCIgMgHQgHgFgGAAQgPAAgJAMgAKMa5IAMADIAOAFIANABQARAAAOgSQAJgNACgNIAJAAQALAAAGgCQAGgEAFgHQAIAHAJADQAJADAGAAIB9AAQALAAAGgCQAGgEAGgHQAHAHAKADQAHADAHAAIA0AAIAAgTIgLhNIAEABIACgIIABgKIgKgEQgGgDAAgFIgCgBQgDAFgBAGIgBAMIAGADIALBTIggAAQABgHgGgLQgEgIgHgKQgGABgIAGQgJAGgGAIQgEAHgGADQgHAFgIAAIgPAAQgDgBgNgKQgPgPgGgEQgOgKgKAAQgKAAgHAGQgFAFgCAHIAKgBQAIAAAIADQAHACAIAGQAIAEAKAIIhJAAQgBgHgFgLQgEgIgHgKQgGABgIAGQgJAGgGAIQgEAHgFADQgIAFgJAAIgIAAQAAgOgCgHQgEgLgJAAQgIAAgFALQgFAIgBAKQAAALAIAFQAGAEANAAIABAAIgMAPQgIAJgJAFQgLAGgLAAIgLgBIgMgDgANOaxIAPAIIAIgOIgQgJgAQiYoIgEAJIACAYIAEAnIACAcIAAAFIgBAGIACABIAGgMQADgHAAgIIgBgdIgFgjIgDgeIgFAJgEgWYAgEIAAqmIY+AAIAAKmgALJaDQgEgDAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQAEAAADAEQADADACAJIgBAAIAAAAQgJAAgEgCgAMUaAQgHgDgDgDIAGgHQADgEAEgBIAGAJQADAGABAGIgBABQgFgBgHgDgA2gVWIAAqtIAAqqIAAqrIAAqsIAAqrIZPAAITyAAIAAKrIzyAAIAAqrIAAKrI5PAAIZPAAIAAKsI5PAAIZPAAIAAKrI5PAAIZPAAIAAKqI5PAAIZPAAIAAKtgArT6fIAOAEIAOAFQAJACAGAAQAIAAALgHQAMgHAHgLQAKgLAAgLICpAAIAAgTIgLhNIAEACIACgIIABgLIgKgEQgGgCAAgGIgBgBQgDAGgBAFIgBANIAFADIAMBSIggAAIAAgHQAAgRgDgHQgCgGgHgIIgHAQQAHAHACAFQADAGAAALIgqAAQgHgOgMgNQgLgMgPgMIgIgFQgHgFAAgCQAAgCAKgFIAUgHIAVgHIAAgRIgcALQgTAHgHAJQgJAKABAQQgBADAHAFIALAJIADgDQAPAJAJAHQAIAIAIAKIhEAAIAAgHQAAgJgEgJQgFgHgIgIIgFAPQAHAHADAIQAFAIgBAIQABAJgJALQgJALgMAIQgNAIgNAAIgMgCIgOgDgAte6fIANAEIAPAFQAIACAGAAQAIAAALgHQAMgHAIgLQAKgLAAgLIAAgYQAAgJgFgJQgEgHgIgIIgGAPQAHAHADAIQAFAIAAAIQAAAJgIALQgJALgMAIQgOAIgMAAIgNgCIgNgDgAH97XIgFARQgCAIAAAIQAAAQAMAHQAJAIAUAAQAdAAAOgNQAKgLADgUICAAAQAKAAAEgBQADgBAFgEQAEAEAFABQAEABAGAAIE5AAIAAgTIgMhNIAFACIACgIIAAgLIgJgEQgHgCAAgGIgBgBQgCAGgBAFIgBANIAEADIAMBSIggAAIAAgHQAAgRgCgHQgCgGgHgIIgHAQQAHAHACAFQACAGAAALIgvAAQgEgBgNgKQgPgOgGgEQgOgKgKAAQgKgBgHAHQgFAEgCAIIAKgBQAIAAAIADQAHACAIAGQAIAEAJAHIhIAAIAAgIQAAgMgHgIQgGgHgOAAQgIAAgIACQgGADgHAEIgSANQgIAFgNAFQgKADgJAAQgIABgGgJQgHgGgDgOIgEAGIABAGIAAAGQABAHgGACQgDACgJgBIgMAAIAAgIQABgMgHgIQgGgHgOAAQgIAAgIACQgGADgIAEIgRANQgJAGgJAEQgKADgLAAIgDAAQAAgOgCgKQgCgGgFgHIgIATQAGAHACAHQAEAJAAAKQAAAOgSAIQgPAGgTABQgQAAgJgHQgIgGAAgMQAAgHACgIQACgIAHgOIgEgCIgIARgARM8wIgFAJIAEAYIADAmIACAdIgBAEIAAAHIACABIAGgMQADgIAAgIIgCgdIgDgjIgFgeIgEAKgAm88wIgEAJIADAYIAEAmIACAdIgBAEIgBAHIADABIAFgMQAEgIAAgIIgCgdIgEgjIgEgeIgFAKgArw8wIgFAJIADAYIAEAmIABAdIAAAEIgBAHIACABIAGgMQADgIAAgIIgBgdIgEgjIgEgeIgEAKgAPh8UIAQAIIAIgPIgQgIgAon8UIARAIIAHgPIgQgIgAOZ8XIAQAHIAGgNIgPgJgAP38dIAQAIIAIgOIgRgJgAoQ8dIAPAIIAIgOIgQgJgACv1YgACv1YgAMk7UIAVgKQAOgIAKAAQAIAAAGADQAGADAAAFQAAAEgFACQgFABgKAAgAJ67UIAPgHIAPgHQAJgDAHgBQAIAAAGADQAGADAAAFQAAAEgGACQgFABgKAAg");
	this.shape_6.setTransform(171.5,388.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.result}]}).wait(140));

	// Layer 8
	this.place_3 = new lib.Symbol40();
	this.place_3.setTransform(252.3,490.7);

	this.place_2 = new lib.Symbol39();
	this.place_2.setTransform(252.3,422.3);

	this.place_1 = new lib.Symbol38();
	this.place_1.setTransform(252.3,353.9);

	this.place_0 = new lib.Symbol37();
	this.place_0.setTransform(252.3,284.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.place_0},{t:this.place_1},{t:this.place_2},{t:this.place_3}]}).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.4,24.4,1081.6,612.4);


// symbols:
(lib.اشتقاقالدوالالأسية = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlQBdIAJgJIALAIIgJAIgAljBdIAJgJIAKAIIgJAIgAl4BJQgNgJAAgOQAAgKAHgNIALgUIAEACIgHAMQgGALAAAHQAAAMANAGQALAHAVAAQAPgBAKgCQANgCAAgFQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgEgBIgIAAIgIgBQgGABgDgCQgCgCAAgDQAAgMAGgIQAGgGAKgDQAIgCAIAAIAwAAIgLhRIgFgCIABgNQABgGACgFIACAAQAAAGAHADIAJAEIAAALIgCAHIgFgBIALBLIAAACIARAAIgEgKIgCgKQAAgLAKgIQAJgIAPAAQAMAAAIAGQAEACAHAKIgBACIgNgDIgLgBQgNAAgIADQgHADAAAFQAAAEAEAFQAFAFAIAFIAagFIAdgGIgHAQQgPAFgUAFQgSADgRAAIhMAAIgXABQgHABAAACQAAADAJAAIAGAAIAKACIAHABQADABAAAEQAAASgMAJQgNAIgfABQgUgBgNgGgAFOAdQgHAAgEgCQgEgCgEgDQgFAEgDABQgGACgIAAIgHAAQgEAAgGgCIgIgFQgEAFgFABQgDABgJAAIgaAAQgHAAgEgGQgDgEgCgJQgCgKgBgMIgBgWIgBgRIgDgKIgGgIIAMgTQADALACARIACAvQACAQAEAFQACAEADAAIAaAAQAIAAADgBQAGgDAAgGIAAgEIgBgGIADgGIAFANQADAFAEAEQAEAEAHAAIAGAAQAIAAADgCQAEgDAAgFIAAgFIgBgFIADgGIADAJQADAJADAEQADADAGABQABgBAAAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgGgEgEIgFgGIAHgLQAEAHABAEQACAHAAAIIAAAHIApAAQABgLgDgFQgCgEgHgIIAIgQQAGAJACAFQADAHAAAQIAAAYgABCAdIAAgRIAPAAQAGAAAGgCQAGgCAJgFIADgIIABgJQAAgKgCgNIgFgWIgDgQIgHgCIACgLIAEgLQABAEAGADQAFACAHABIgBAMIgCAHIgEgBIgBAAIAGAXQACANAAAHIgCAQIgBAJIAWgLQAOgIAKAAQAOABAGAHQAGAHAAALIAAAZgACJgBIgQAFIgNAIIAqAAQAYAAAAgIQAAgEgGgBQgFgDgJAAQgIAAgJADgAhgAdQgHAAgEgGQgDgEgCgJQgCgKgBgMIgBgWIgCgRIgDgKIgGgIIANgTQADALABARIACAvQADAQADAFQACAEAEAAIAoAAIAKAAIAJgCQgQgDgFgCQgLgFAAgKQgBgKAGgJQAGgKAJAAQAKAAAFANQAEAJAAAOIAAAPIAoAAQAAgLgDgFQgCgEgFgIIAFgQQAIAJABAFQADAHAAAQIAAAYgAg6gUQgBACAAADQgBAIAJACIAMACIgEgMQgEgHgFAAQgEAAgCACgAEfgrIAHgOIAQAIIgIAOgAgcgzIAIgOIAQAIIgIAPgAE1g0IAIgOIAQAIIgIAPgAFng1IAHgPIAQAJIgIANgAgFg8IAFgOIAQAIIgHAPgAg8hEIAIgOIANAJIgIAOgAEihFIAIgPIAPAJIgHAOg");
	this.shape.setTransform(108.5,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(69.5,-4.4,78.1,20.1);


(lib.Tween59 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween58 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween57 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween56 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween55 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween54 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween52 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween50 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween49 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween48 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween47 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween46 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween45 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween44 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween43 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween42 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween40 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween39 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween38 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-11.2,45.3,22.6);


(lib.Tween16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-11.2,45.3,22.6);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-11.2,45.3,22.6);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-11.2,45.3,22.6);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-11.2,45.3,22.6);


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-11.2,45.3,22.6);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-11.2,45.3,22.6);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape.setTransform(0,0,1.306,1.186);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mad:1,kah:2,elec:3,mec:4});

	// timeline functions:
	this.frame_0 = function() {
		this.id=55;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0.4,-3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApuFQIAAqfITdAAIAAKfg");
	this.shape_1.setTransform(0,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQANAAANgIQAMgIAJgLQAJgLgBgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAHgRQAFgIAGgGQAHgIAGAAQACAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQgBgQAJgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEAAACQABACAGAFIAIAGQAOALAMAMQALALAIAPIAAARIhzAAQAHADADAFQAHAHAAAIQgBAHgCAFQgDAGgGAAQgMAAgKgJQgMgJABgQIAAgHIgPAAQAAAKgKAMQgHAKgMAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAFgBQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAJgDAGgDQAGgFAAgEQAAgHgDAAQgEAAgGAHgAi3BJIAIgOIAQAIIgHAOgAgZBEIAGgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgBgKQgDgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAFAJABAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgEgJgDgPQgDAGgEADQgEADgGAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAFABIAIAAQAGAAAFgEIgCgLQgIADgGAEgAhzgrIgFgDQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAFAAIADABIABADIgBADIgBADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAFgBQgBACgDACIgGADIgSAGQAAgFAKgDgAkAg9IAIgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_2.setTransform(1.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D0727").s().p("AAPBUIgOgEIgNgFIACgEIAMACIAMACQANAAANgJQANgHAIgLQAJgMAAgIQAAgIgEgIQgEgIgGgFIAFgPQAIAHAEAIQAFAHgBAJIAAAHIAqAAQAAgLgCgGQgDgFgGgFIAHgQQAHAIABAGQAEAHAAAPIAAAHIBDAAQgHgKgJgIQgIgFgPgJIgEADIgLgJQgGgFAAgDQAAgRAIgJQAHgJATgHIAcgLIAAARIgVAHIgTAHQgKAFAAABQAAADAHAFIAHAGQAPAKALANQAMALAHAOIAgAAIgLhRIgGgCIABgNQABgFADgGIACABQAAAGAGACIAKAFIgBAKIgCAIIgEgCIALBLIAAATIiqAAQAAALgJAMQgIAKgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgDIAMACIALACQAMAAAKgHQAIgFAJgIIAMgQQgOAAgGgDQgIgGABgKQAAgLAEgIQAGgIAJAAQAIAAADAIQADAIAAANIAAALQAAARgMAPQgNASgRAAIgOgBgAgpAJQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEACQAEADALAAQgDgJgDgEQgDgDgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABgAjJBKIAIgPIAQAIIgHAPgAiyBBIAHgPIAQAJIgIAOgAENApIABgGIAAgFIgCgdIgDgkIgDgYIAEgJIAFgKIADAeIAFAjIABAbQAAAIgDAIIgGAMgAjZAnQgHABgFgMQgEgKgDgOQgDAFgEADQgEAEgGAAQgLAAgIgCQgHgCAAgBQAAgJALgIQALgKARgIIgBgEIgBgEQAAgEACgEIAFgHIACAMIADAMIACARIAFASQADAKADAAIA3AAQAAgLgCgGQgCgFgHgFIAHgQQAIAIABAGQADAHAAAPIAAAHIAqAAQgBgLgCgGQgCgFgHgFIAHgQQAIAIABAGQADAHAAAPIAAAYgAj9gGQgEADgEADIAFACIAIAAQAGAAAFgFIgCgKQgIADgGAEgABQgpIAHgOIAQAIIgHAPgAiIgrIAHgOIAQAIIgIAOgABmgyIAIgOIAQAJIgIAOgAkSg8IAIgPIAQAIIgHAPgAj7hFIAHgPIAQAIIgIAPg");
	this.shape_3.setTransform(1.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D0727").s().p("ABvBIIAIgOIAQAIIgIAPgAhuBIIAHgOIARAIIgIAPgACFA/IAHgOIARAIIgIAPgAhXA/IAGgOIARAIIgIAPgADiAmQgGAAgJgDQgJgDgIgGQgFAGgGAEQgGACgLAAIiXAAQgGAAgEgGQgEgEgBgJQAAgKgBgMIgBgWIgCgRIgCgKIgHgIIAMgTQACALACARIABAvQACAQAEAFQACAEADAAIBSAAQgHgLgIgHQgKgGgOgJIgDAEIgMgJQgGgGAAgCQAAgRAIgJQAIgJATgIIAbgKIAAARIgVAGIgUAIQgJAEAAACQAAADAHAEIAIAGQAOALALAMQAMALAIAPIApAAQAAgLgDgHQgBgDgHgHIAHgQQAHAJACAFQACAHAAAQIAAAHIAIAAQAJAAAIgEQAFgEAEgHQAGgGAJgGQAIgGAGgCQAHALAEAGQAFALABAHIAAARgADQACIgGAIQADADAHADQAHADAFABIABgBQgBgGgDgFIgGgIQgEAAgDACgAjNAmQgHAAgEgGQgEgEgBgJQgCgKgBgMIgBgWIgCgRIgCgKIgHgIIANgTQADALABARIACAvQACAQAEAFQADAEADAAIBRAAQgHgLgIgHQgKgGgPgJIgCAEIgMgJQgGgGAAgCQAAgRAIgJQAHgJAUgIIAbgKIAAARIgUAGIgVAIQgJAEAAACQAAADAGAEIAJAGQAOALALAMQAMALAIAPIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAHAAAQIAAAHIAqAAQAAgLgCgHQgCgDgHgHIAHgQQAHAJABAFQAEAHAAAQIAAAYgAgugsIAHgPIARAJIgIANg");
	this.shape_4.setTransform(1.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF33").s().p("Ap3FWIAAqrITvAAIAAKrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.2,-34.2,126.6,68.6);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mad":1,"kah":2,"elec":3,"mec":4});

	// timeline functions:
	this.frame_0 = function() {
		this.id=55;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0.4,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApuFQIAAqfITdAAIAAKfg");
	this.shape_1.setTransform(0,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQANAAANgIQAMgIAJgLQAJgLgBgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAHgRQAFgIAGgGQAHgIAGAAQACAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQgBgQAJgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEAAACQABACAGAFIAIAGQAOALAMAMQALALAIAPIAAARIhzAAQAHADADAFQAHAHAAAIQgBAHgCAFQgDAGgGAAQgMAAgKgJQgMgJABgQIAAgHIgPAAQAAAKgKAMQgHAKgMAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAFgBQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAJgDAGgDQAGgFAAgEQAAgHgDAAQgEAAgGAHgAi3BJIAIgOIAQAIIgHAOgAgZBEIAGgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgBgKQgDgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAFAJABAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgEgJgDgPQgDAGgEADQgEADgGAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAFABIAIAAQAGAAAFgEIgCgLQgIADgGAEgAhzgrIgFgDQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAFAAIADABIABADIgBADIgBADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAFgBQgBACgDACIgGADIgSAGQAAgFAKgDgAkAg9IAIgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_2.setTransform(1.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D0727").s().p("AAPBUIgOgEIgNgFIACgEIAMACIAMACQANAAANgJQANgHAIgLQAJgMAAgIQAAgIgEgIQgEgIgGgFIAFgPQAIAHAEAIQAFAHgBAJIAAAHIAqAAQAAgLgCgGQgDgFgGgFIAHgQQAHAIABAGQAEAHAAAPIAAAHIBDAAQgHgKgJgIQgIgFgPgJIgEADIgLgJQgGgFAAgDQAAgRAIgJQAHgJATgHIAcgLIAAARIgVAHIgTAHQgKAFAAABQAAADAHAFIAHAGQAPAKALANQAMALAHAOIAgAAIgLhRIgGgCIABgNQABgFADgGIACABQAAAGAGACIAKAFIgBAKIgCAIIgEgCIALBLIAAATIiqAAQAAALgJAMQgIAKgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgDIAMACIALACQAMAAAKgHQAIgFAJgIIAMgQQgOAAgGgDQgIgGABgKQAAgLAEgIQAGgIAJAAQAIAAADAIQADAIAAANIAAALQAAARgMAPQgNASgRAAIgOgBgAgpAJQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEACQAEADALAAQgDgJgDgEQgDgDgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABgAjJBKIAIgPIAQAIIgHAPgAiyBBIAHgPIAQAJIgIAOgAENApIABgGIAAgFIgCgdIgDgkIgDgYIAEgJIAFgKIADAeIAFAjIABAbQAAAIgDAIIgGAMgAjZAnQgHABgFgMQgEgKgDgOQgDAFgEADQgEAEgGAAQgLAAgIgCQgHgCAAgBQAAgJALgIQALgKARgIIgBgEIgBgEQAAgEACgEIAFgHIACAMIADAMIACARIAFASQADAKADAAIA3AAQAAgLgCgGQgCgFgHgFIAHgQQAIAIABAGQADAHAAAPIAAAHIAqAAQgBgLgCgGQgCgFgHgFIAHgQQAIAIABAGQADAHAAAPIAAAYgAj9gGQgEADgEADIAFACIAIAAQAGAAAFgFIgCgKQgIADgGAEgABQgpIAHgOIAQAIIgHAPgAiIgrIAHgOIAQAIIgIAOgABmgyIAIgOIAQAJIgIAOgAkSg8IAIgPIAQAIIgHAPgAj7hFIAHgPIAQAIIgIAPg");
	this.shape_3.setTransform(1.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D0727").s().p("ABvBIIAIgOIAQAIIgIAPgAhuBIIAHgOIARAIIgIAPgACFA/IAHgOIARAIIgIAPgAhXA/IAGgOIARAIIgIAPgADiAmQgGAAgJgDQgJgDgIgGQgFAGgGAEQgGACgLAAIiXAAQgGAAgEgGQgEgEgBgJQAAgKgBgMIgBgWIgCgRIgCgKIgHgIIAMgTQACALACARIABAvQACAQAEAFQACAEADAAIBSAAQgHgLgIgHQgKgGgOgJIgDAEIgMgJQgGgGAAgCQAAgRAIgJQAIgJATgIIAbgKIAAARIgVAGIgUAIQgJAEAAACQAAADAHAEIAIAGQAOALALAMQAMALAIAPIApAAQAAgLgDgHQgBgDgHgHIAHgQQAHAJACAFQACAHAAAQIAAAHIAIAAQAJAAAIgEQAFgEAEgHQAGgGAJgGQAIgGAGgCQAHALAEAGQAFALABAHIAAARgADQACIgGAIQADADAHADQAHADAFABIABgBQgBgGgDgFIgGgIQgEAAgDACgAjNAmQgHAAgEgGQgEgEgBgJQgCgKgBgMIgBgWIgCgRIgCgKIgHgIIANgTQADALABARIACAvQACAQAEAFQADAEADAAIBRAAQgHgLgIgHQgKgGgPgJIgCAEIgMgJQgGgGAAgCQAAgRAIgJQAHgJAUgIIAbgKIAAARIgUAGIgVAIQgJAEAAACQAAADAGAEIAJAGQAOALALAMQAMALAIAPIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAHAAAQIAAAHIAqAAQAAgLgCgHQgCgDgHgHIAHgQQAHAJABAFQAEAHAAAQIAAAYgAgugsIAHgPIARAJIgIANg");
	this.shape_4.setTransform(1.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF33").s().p("Ap3FVIAAqpITvAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.2,-34.1,126.6,68.4);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mad":1,"kah":2,"elec":3,"mec":4});

	// timeline functions:
	this.frame_0 = function() {
		this.id=55;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0.4,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApuFQIAAqfITdAAIAAKfg");
	this.shape_1.setTransform(0,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQANAAANgIQAMgIAJgLQAJgLgBgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAHgRQAFgIAGgGQAHgIAGAAQACAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQgBgQAJgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEAAACQABACAGAFIAIAGQAOALAMAMQALALAIAPIAAARIhzAAQAHADADAFQAHAHAAAIQgBAHgCAFQgDAGgGAAQgMAAgKgJQgMgJABgQIAAgHIgPAAQAAAKgKAMQgHAKgMAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAFgBQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAJgDAGgDQAGgFAAgEQAAgHgDAAQgEAAgGAHgAi3BJIAIgOIAQAIIgHAOgAgZBEIAGgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgBgKQgDgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAFAJABAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgEgJgDgPQgDAGgEADQgEADgGAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAFABIAIAAQAGAAAFgEIgCgLQgIADgGAEgAhzgrIgFgDQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAFAAIADABIABADIgBADIgBADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAFgBQgBACgDACIgGADIgSAGQAAgFAKgDgAkAg9IAIgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_2.setTransform(1.9,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D0727").s().p("AAPBUIgOgEIgNgFIACgEIAMACIAMACQANAAANgJQANgHAIgLQAJgMAAgIQAAgIgEgIQgEgIgGgFIAFgPQAIAHAEAIQAFAHgBAJIAAAHIAqAAQAAgLgCgGQgDgFgGgFIAHgQQAHAIABAGQAEAHAAAPIAAAHIBDAAQgHgKgJgIQgIgFgPgJIgEADIgLgJQgGgFAAgDQAAgRAIgJQAHgJATgHIAcgLIAAARIgVAHIgTAHQgKAFAAABQAAADAHAFIAHAGQAPAKALANQAMALAHAOIAgAAIgLhRIgGgCIABgNQABgFADgGIACABQAAAGAGACIAKAFIgBAKIgCAIIgEgCIALBLIAAATIiqAAQAAALgJAMQgIAKgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgDIAMACIALACQAMAAAKgHQAIgFAJgIIAMgQQgOAAgGgDQgIgGABgKQAAgLAEgIQAGgIAJAAQAIAAADAIQADAIAAANIAAALQAAARgMAPQgNASgRAAIgOgBgAgpAJQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEACQAEADALAAQgDgJgDgEQgDgDgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABgAjJBKIAIgPIAQAIIgHAPgAiyBBIAHgPIAQAJIgIAOgAENApIABgGIAAgFIgCgdIgDgkIgDgYIAEgJIAFgKIADAeIAFAjIABAbQAAAIgDAIIgGAMgAjZAnQgHABgFgMQgEgKgDgOQgDAFgEADQgEAEgGAAQgLAAgIgCQgHgCAAgBQAAgJALgIQALgKARgIIgBgEIgBgEQAAgEACgEIAFgHIACAMIADAMIACARIAFASQADAKADAAIA3AAQAAgLgCgGQgCgFgHgFIAHgQQAIAIABAGQADAHAAAPIAAAHIAqAAQgBgLgCgGQgCgFgHgFIAHgQQAIAIABAGQADAHAAAPIAAAYgAj9gGQgEADgEADIAFACIAIAAQAGAAAFgFIgCgKQgIADgGAEgABQgpIAHgOIAQAIIgHAPgAiIgrIAHgOIAQAIIgIAOgABmgyIAIgOIAQAJIgIAOgAkSg8IAIgPIAQAIIgHAPgAj7hFIAHgPIAQAIIgIAPg");
	this.shape_3.setTransform(1.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D0727").s().p("ABvBIIAIgOIAQAIIgIAPgAhuBIIAHgOIARAIIgIAPgACFA/IAHgOIARAIIgIAPgAhXA/IAGgOIARAIIgIAPgADiAmQgGAAgJgDQgJgDgIgGQgFAGgGAEQgGACgLAAIiXAAQgGAAgEgGQgEgEgBgJQAAgKgBgMIgBgWIgCgRIgCgKIgHgIIAMgTQACALACARIABAvQACAQAEAFQACAEADAAIBSAAQgHgLgIgHQgKgGgOgJIgDAEIgMgJQgGgGAAgCQAAgRAIgJQAIgJATgIIAbgKIAAARIgVAGIgUAIQgJAEAAACQAAADAHAEIAIAGQAOALALAMQAMALAIAPIApAAQAAgLgDgHQgBgDgHgHIAHgQQAHAJACAFQACAHAAAQIAAAHIAIAAQAJAAAIgEQAFgEAEgHQAGgGAJgGQAIgGAGgCQAHALAEAGQAFALABAHIAAARgADQACIgGAIQADADAHADQAHADAFABIABgBQgBgGgDgFIgGgIQgEAAgDACgAjNAmQgHAAgEgGQgEgEgBgJQgCgKgBgMIgBgWIgCgRIgCgKIgHgIIANgTQADALABARIACAvQACAQAEAFQADAEADAAIBRAAQgHgLgIgHQgKgGgPgJIgCAEIgMgJQgGgGAAgCQAAgRAIgJQAHgJAUgIIAbgKIAAARIgUAGIgVAIQgJAEAAACQAAADAGAEIAJAGQAOALALAMQAMALAIAPIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAHAAAQIAAAHIAqAAQAAgLgCgHQgCgDgHgHIAHgQQAHAJABAFQAEAHAAAQIAAAYgAgugsIAHgPIARAJIgIANg");
	this.shape_4.setTransform(1.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF33").s().p("Ap3FVIAAqpITvAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.2,-34.1,126.6,68.4);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mad":1,"kah":2,"elec":3,"mec":4});

	// timeline functions:
	this.frame_0 = function() {
		this.id=55;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0.4,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApuFQIAAqfITdAAIAAKfg");
	this.shape_1.setTransform(0,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQANAAANgIQAMgIAJgLQAJgLgBgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAHgRQAFgIAGgGQAHgIAGAAQACAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQgBgQAJgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEAAACQABACAGAFIAIAGQAOALAMAMQALALAIAPIAAARIhzAAQAHADADAFQAHAHAAAIQgBAHgCAFQgDAGgGAAQgMAAgKgJQgMgJABgQIAAgHIgPAAQAAAKgKAMQgHAKgMAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAFgBQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAJgDAGgDQAGgFAAgEQAAgHgDAAQgEAAgGAHgAi3BJIAIgOIAQAIIgHAOgAgZBEIAGgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgBgKQgDgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAFAJABAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgEgJgDgPQgDAGgEADQgEADgGAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAFABIAIAAQAGAAAFgEIgCgLQgIADgGAEgAhzgrIgFgDQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAFAAIADABIABADIgBADIgBADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAFgBQgBACgDACIgGADIgSAGQAAgFAKgDgAkAg9IAIgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_2.setTransform(1.9,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D0727").s().p("AAPBUIgOgEIgNgFIACgEIAMACIAMACQANAAANgJQANgHAIgLQAJgMAAgIQAAgIgEgIQgEgIgGgFIAFgPQAIAHAEAIQAFAHgBAJIAAAHIAqAAQAAgLgCgGQgDgFgGgFIAHgQQAHAIABAGQAEAHAAAPIAAAHIBDAAQgHgKgJgIQgIgFgPgJIgEADIgLgJQgGgFAAgDQAAgRAIgJQAHgJATgHIAcgLIAAARIgVAHIgTAHQgKAFAAABQAAADAHAFIAHAGQAPAKALANQAMALAHAOIAgAAIgLhRIgGgCIABgNQABgFADgGIACABQAAAGAGACIAKAFIgBAKIgCAIIgEgCIALBLIAAATIiqAAQAAALgJAMQgIAKgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgDIAMACIALACQAMAAAKgHQAIgFAJgIIAMgQQgOAAgGgDQgIgGABgKQAAgLAEgIQAGgIAJAAQAIAAADAIQADAIAAANIAAALQAAARgMAPQgNASgRAAIgOgBgAgpAJQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEACQAEADALAAQgDgJgDgEQgDgDgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABgAjJBKIAIgPIAQAIIgHAPgAiyBBIAHgPIAQAJIgIAOgAENApIABgGIAAgFIgCgdIgDgkIgDgYIAEgJIAFgKIADAeIAFAjIABAbQAAAIgDAIIgGAMgAjZAnQgHABgFgMQgEgKgDgOQgDAFgEADQgEAEgGAAQgLAAgIgCQgHgCAAgBQAAgJALgIQALgKARgIIgBgEIgBgEQAAgEACgEIAFgHIACAMIADAMIACARIAFASQADAKADAAIA3AAQAAgLgCgGQgCgFgHgFIAHgQQAIAIABAGQADAHAAAPIAAAHIAqAAQgBgLgCgGQgCgFgHgFIAHgQQAIAIABAGQADAHAAAPIAAAYgAj9gGQgEADgEADIAFACIAIAAQAGAAAFgFIgCgKQgIADgGAEgABQgpIAHgOIAQAIIgHAPgAiIgrIAHgOIAQAIIgIAOgABmgyIAIgOIAQAJIgIAOgAkSg8IAIgPIAQAIIgHAPgAj7hFIAHgPIAQAIIgIAPg");
	this.shape_3.setTransform(1.9,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D0727").s().p("ABvBIIAIgOIAQAIIgIAPgAhuBIIAHgOIARAIIgIAPgACFA/IAHgOIARAIIgIAPgAhXA/IAGgOIARAIIgIAPgADiAmQgGAAgJgDQgJgDgIgGQgFAGgGAEQgGACgLAAIiXAAQgGAAgEgGQgEgEgBgJQAAgKgBgMIgBgWIgCgRIgCgKIgHgIIAMgTQACALACARIABAvQACAQAEAFQACAEADAAIBSAAQgHgLgIgHQgKgGgOgJIgDAEIgMgJQgGgGAAgCQAAgRAIgJQAIgJATgIIAbgKIAAARIgVAGIgUAIQgJAEAAACQAAADAHAEIAIAGQAOALALAMQAMALAIAPIApAAQAAgLgDgHQgBgDgHgHIAHgQQAHAJACAFQACAHAAAQIAAAHIAIAAQAJAAAIgEQAFgEAEgHQAGgGAJgGQAIgGAGgCQAHALAEAGQAFALABAHIAAARgADQACIgGAIQADADAHADQAHADAFABIABgBQgBgGgDgFIgGgIQgEAAgDACgAjNAmQgHAAgEgGQgEgEgBgJQgCgKgBgMIgBgWIgCgRIgCgKIgHgIIANgTQADALABARIACAvQACAQAEAFQADAEADAAIBRAAQgHgLgIgHQgKgGgPgJIgCAEIgMgJQgGgGAAgCQAAgRAIgJQAHgJAUgIIAbgKIAAARIgUAGIgVAIQgJAEAAACQAAADAGAEIAJAGQAOALALAMQAMALAIAPIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAHAAAQIAAAHIAqAAQAAgLgCgHQgCgDgHgHIAHgQQAHAJABAFQAEAHAAAQIAAAYgAgugsIAHgPIARAJIgIANg");
	this.shape_4.setTransform(1.9,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF33").s().p("Ap3FVIAAqpITvAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.2,-34.1,126.6,68.4);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AAXA5QgOgRgBgoQAAgYAGgQQAFgPAKgIQALgJAPABQALAAAJAEQAJAEAFAKQAGAIADAMQADANAAAUQAAAZgEAPQgGAPgKAJQgKAIgQAAQgVABgLgQgAAjgvQgJANAAAiQAAAjAIALQAJAMAMAAQAMAAAJgMQAHgLAAgjQAAgigHgLQgJgMgMAAQgMAAgIAKgAhXA+QgMgMgBgSIARgCQADAPAIAHQAHAGAKAAQAMAAAJgIQAIgJAAgNQABgMgJgIQgHgHgMgBIgNACIACgNIADAAQALAAAJgGQAJgGAAgMQAAgJgGgHQgHgHgKAAQgLAAgGAHQgIAGgBANIgSgDQAEgRALgKQALgJARAAQAMAAAKAEQAJAGAGAIQAFAIAAAKQAAAJgFAJQgFAHgKAEQANADAHAIQAHAJAAANQAAAUgNANQgOANgVgBQgTABgNgLg");
	this.shape.setTransform(13.2,13.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,5.8,20.4,14.6);


(lib.bubble2blueglow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AhoD4QgwgVglglQgmglgVgwQgVgzAAg2QAAg1AVgzQAVgwAmglQAlgmAwgVQAzgUA1gBQA2ABAzAUQAwAVAlAmQAmAlAUAwQAVAzABA1QAAA2gWAzQgUAwgmAlQglAlgwAVQgzAVg2ABQg1AAgzgWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.9,-26.9,54,54);


(lib._004copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=3;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("ABvBIIAHgOIAQAIIgHAPgAhuBIIAIgOIAPAIIgHAPgACGA/IAHgOIAQAIIgIAPgAhYA/IAHgOIARAIIgIAPgADiAmQgHAAgHgDQgKgEgHgFQgGAGgGAEQgGACgLAAIiWAAQgHAAgEgFQgDgFgCgKQAAgJgBgMIgBgWIgCgSIgDgJIgFgJIAMgSQABALABAQIADAwQACAQADAFQADAEADAAIBRAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgUAHIgUAHQgKAEAAACQAAADAGAEIAIAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJABAFQAEAIAAAPIAAAHIAIAAQAIAAAHgEQAGgEAEgGQAGgHAJgHQAIgFAGgCQAHAKAEAHQAGALgBAHIAAARgADPACIgFAHQADAEAHADQAHADAFABIABgCQgBgFgDgFIgGgIQgFAAgDACgAjOAmQgGAAgEgFQgEgFgBgKQgCgJgBgMIgBgWIgCgSIgDgJIgFgJIALgSQAEALACAQIACAwQACAQADAFQACAEADAAIBSAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgVAHIgTAHQgKAEAAACQAAADAHAEIAHAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJACAFQADAIAAAPIAAAHIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAIAAAPIAAAYgAgtgsIAHgPIAPAIIgHAPg");
	this.shape.setTransform(0.1,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABvBIIAHgOIAQAIIgHAPgAhuBIIAIgOIAPAIIgHAPgACGA/IAHgOIAQAIIgIAPgAhYA/IAHgOIARAIIgIAPgADiAmQgHAAgHgDQgKgEgHgFQgGAGgGAEQgGACgLAAIiWAAQgHAAgEgFQgDgFgCgKQAAgJgBgMIgBgWIgCgSIgDgJIgFgJIAMgSQABALABAQIADAwQACAQADAFQADAEADAAIBRAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgUAHIgUAHQgKAEAAACQAAADAGAEIAIAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJABAFQAEAIAAAPIAAAHIAIAAQAIAAAHgEQAGgEAEgGQAGgHAJgHQAIgFAGgCQAHAKAEAHQAGALgBAHIAAARgADPACIgFAHQADAEAHADQAHADAFABIABgCQgBgFgDgFIgGgIQgFAAgDACgAjOAmQgGAAgEgFQgEgFgBgKQgCgJgBgMIgBgWIgCgSIgDgJIgFgJIALgSQAEALACAQIACAwQACAQADAFQACAEADAAIBSAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgVAHIgTAHQgKAEAAACQAAADAHAEIAHAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJACAFQADAIAAAPIAAAHIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAIAAAPIAAAYgAgtgsIAHgPIAPAIIgHAPg");
	this.shape_1.setTransform(0.1,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._004copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=3;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("ABvBIIAHgOIAQAIIgHAPgAhuBIIAIgOIAPAIIgHAPgACGA/IAHgOIAQAIIgIAPgAhYA/IAHgOIARAIIgIAPgADiAmQgHAAgHgDQgKgEgHgFQgGAGgGAEQgGACgLAAIiWAAQgHAAgEgFQgDgFgCgKQAAgJgBgMIgBgWIgCgSIgDgJIgFgJIAMgSQABALABAQIADAwQACAQADAFQADAEADAAIBRAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgUAHIgUAHQgKAEAAACQAAADAGAEIAIAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJABAFQAEAIAAAPIAAAHIAIAAQAIAAAHgEQAGgEAEgGQAGgHAJgHQAIgFAGgCQAHAKAEAHQAGALgBAHIAAARgADPACIgFAHQADAEAHADQAHADAFABIABgCQgBgFgDgFIgGgIQgFAAgDACgAjOAmQgGAAgEgFQgEgFgBgKQgCgJgBgMIgBgWIgCgSIgDgJIgFgJIALgSQAEALACAQIACAwQACAQADAFQACAEADAAIBSAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgVAHIgTAHQgKAEAAACQAAADAHAEIAHAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJACAFQADAIAAAPIAAAHIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAIAAAPIAAAYgAgtgsIAHgPIAPAIIgHAPg");
	this.shape.setTransform(0.1,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABvBIIAHgOIAQAIIgHAPgAhuBIIAIgOIAPAIIgHAPgACGA/IAHgOIAQAIIgIAPgAhYA/IAHgOIARAIIgIAPgADiAmQgHAAgHgDQgKgEgHgFQgGAGgGAEQgGACgLAAIiWAAQgHAAgEgFQgDgFgCgKQAAgJgBgMIgBgWIgCgSIgDgJIgFgJIAMgSQABALABAQIADAwQACAQADAFQADAEADAAIBRAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgUAHIgUAHQgKAEAAACQAAADAGAEIAIAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJABAFQAEAIAAAPIAAAHIAIAAQAIAAAHgEQAGgEAEgGQAGgHAJgHQAIgFAGgCQAHAKAEAHQAGALgBAHIAAARgADPACIgFAHQADAEAHADQAHADAFABIABgCQgBgFgDgFIgGgIQgFAAgDACgAjOAmQgGAAgEgFQgEgFgBgKQgCgJgBgMIgBgWIgCgSIgDgJIgFgJIALgSQAEALACAQIACAwQACAQADAFQACAEADAAIBSAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgVAHIgTAHQgKAEAAACQAAADAHAEIAHAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJACAFQADAIAAAPIAAAHIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAIAAAPIAAAYgAgtgsIAHgPIAPAIIgHAPg");
	this.shape_1.setTransform(0.1,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._004copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=3;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("ABvBIIAHgOIAQAIIgHAPgAhuBIIAIgOIAPAIIgHAPgACGA/IAHgOIAQAIIgIAPgAhYA/IAHgOIARAIIgIAPgADiAmQgHAAgHgDQgKgEgHgFQgGAGgGAEQgGACgLAAIiWAAQgHAAgEgFQgDgFgCgKQAAgJgBgMIgBgWIgCgSIgDgJIgFgJIAMgSQABALABAQIADAwQACAQADAFQADAEADAAIBRAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgUAHIgUAHQgKAEAAACQAAADAGAEIAIAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJABAFQAEAIAAAPIAAAHIAIAAQAIAAAHgEQAGgEAEgGQAGgHAJgHQAIgFAGgCQAHAKAEAHQAGALgBAHIAAARgADPACIgFAHQADAEAHADQAHADAFABIABgCQgBgFgDgFIgGgIQgFAAgDACgAjOAmQgGAAgEgFQgEgFgBgKQgCgJgBgMIgBgWIgCgSIgDgJIgFgJIALgSQAEALACAQIACAwQACAQADAFQACAEADAAIBSAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgVAHIgTAHQgKAEAAACQAAADAHAEIAHAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJACAFQADAIAAAPIAAAHIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAIAAAPIAAAYgAgtgsIAHgPIAPAIIgHAPg");
	this.shape.setTransform(0.1,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABvBIIAHgOIAQAIIgHAPgAhuBIIAIgOIAPAIIgHAPgACGA/IAHgOIAQAIIgIAPgAhYA/IAHgOIARAIIgIAPgADiAmQgHAAgHgDQgKgEgHgFQgGAGgGAEQgGACgLAAIiWAAQgHAAgEgFQgDgFgCgKQAAgJgBgMIgBgWIgCgSIgDgJIgFgJIAMgSQABALABAQIADAwQACAQADAFQADAEADAAIBRAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgUAHIgUAHQgKAEAAACQAAADAGAEIAIAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJABAFQAEAIAAAPIAAAHIAIAAQAIAAAHgEQAGgEAEgGQAGgHAJgHQAIgFAGgCQAHAKAEAHQAGALgBAHIAAARgADPACIgFAHQADAEAHADQAHADAFABIABgCQgBgFgDgFIgGgIQgFAAgDACgAjOAmQgGAAgEgFQgEgFgBgKQgCgJgBgMIgBgWIgCgSIgDgJIgFgJIALgSQAEALACAQIACAwQACAQADAFQACAEADAAIBSAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgVAHIgTAHQgKAEAAACQAAADAHAEIAHAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJACAFQADAIAAAPIAAAHIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAIAAAPIAAAYgAgtgsIAHgPIAPAIIgHAPg");
	this.shape_1.setTransform(0.1,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._004copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=3;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("ABvBIIAHgOIAQAIIgHAPgAhuBIIAIgOIAPAIIgHAPgACGA/IAHgOIAQAIIgIAPgAhYA/IAHgOIARAIIgIAPgADiAmQgHAAgHgDQgKgEgHgFQgGAGgGAEQgGACgLAAIiWAAQgHAAgEgFQgDgFgCgKQAAgJgBgMIgBgWIgCgSIgDgJIgFgJIAMgSQABALABAQIADAwQACAQADAFQADAEADAAIBRAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgUAHIgUAHQgKAEAAACQAAADAGAEIAIAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJABAFQAEAIAAAPIAAAHIAIAAQAIAAAHgEQAGgEAEgGQAGgHAJgHQAIgFAGgCQAHAKAEAHQAGALgBAHIAAARgADPACIgFAHQADAEAHADQAHADAFABIABgCQgBgFgDgFIgGgIQgFAAgDACgAjOAmQgGAAgEgFQgEgFgBgKQgCgJgBgMIgBgWIgCgSIgDgJIgFgJIALgSQAEALACAQIACAwQACAQADAFQACAEADAAIBSAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgVAHIgTAHQgKAEAAACQAAADAHAEIAHAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJACAFQADAIAAAPIAAAHIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAIAAAPIAAAYgAgtgsIAHgPIAPAIIgHAPg");
	this.shape.setTransform(0.1,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABvBIIAHgOIAQAIIgHAPgAhuBIIAIgOIAPAIIgHAPgACGA/IAHgOIAQAIIgIAPgAhYA/IAHgOIARAIIgIAPgADiAmQgHAAgHgDQgKgEgHgFQgGAGgGAEQgGACgLAAIiWAAQgHAAgEgFQgDgFgCgKQAAgJgBgMIgBgWIgCgSIgDgJIgFgJIAMgSQABALABAQIADAwQACAQADAFQADAEADAAIBRAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgUAHIgUAHQgKAEAAACQAAADAGAEIAIAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJABAFQAEAIAAAPIAAAHIAIAAQAIAAAHgEQAGgEAEgGQAGgHAJgHQAIgFAGgCQAHAKAEAHQAGALgBAHIAAARgADPACIgFAHQADAEAHADQAHADAFABIABgCQgBgFgDgFIgGgIQgFAAgDACgAjOAmQgGAAgEgFQgEgFgBgKQgCgJgBgMIgBgWIgCgSIgDgJIgFgJIALgSQAEALACAQIACAwQACAQADAFQACAEADAAIBSAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgVAHIgTAHQgKAEAAACQAAADAHAEIAHAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJACAFQADAIAAAPIAAAHIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAIAAAPIAAAYgAgtgsIAHgPIAPAIIgHAPg");
	this.shape_1.setTransform(0.1,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=3;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("ABvBIIAHgOIAQAIIgHAPgAhuBIIAIgOIAPAIIgHAPgACGA/IAHgOIAQAIIgIAPgAhYA/IAHgOIARAIIgIAPgADiAmQgHAAgHgDQgKgEgHgFQgGAGgGAEQgGACgLAAIiWAAQgHAAgEgFQgDgFgCgKQAAgJgBgMIgBgWIgCgSIgDgJIgFgJIAMgSQABALABAQIADAwQACAQADAFQADAEADAAIBRAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgUAHIgUAHQgKAEAAACQAAADAGAEIAIAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJABAFQAEAIAAAPIAAAHIAIAAQAIAAAHgEQAGgEAEgGQAGgHAJgHQAIgFAGgCQAHAKAEAHQAGALgBAHIAAARgADPACIgFAHQADAEAHADQAHADAFABIABgCQgBgFgDgFIgGgIQgFAAgDACgAjOAmQgGAAgEgFQgEgFgBgKQgCgJgBgMIgBgWIgCgSIgDgJIgFgJIALgSQAEALACAQIACAwQACAQADAFQACAEADAAIBSAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgVAHIgTAHQgKAEAAACQAAADAHAEIAHAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJACAFQADAIAAAPIAAAHIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAIAAAPIAAAYgAgtgsIAHgPIAPAIIgHAPg");
	this.shape.setTransform(0.1,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABvBIIAHgOIAQAIIgHAPgAhuBIIAIgOIAPAIIgHAPgACGA/IAHgOIAQAIIgIAPgAhYA/IAHgOIARAIIgIAPgADiAmQgHAAgHgDQgKgEgHgFQgGAGgGAEQgGACgLAAIiWAAQgHAAgEgFQgDgFgCgKQAAgJgBgMIgBgWIgCgSIgDgJIgFgJIAMgSQABALABAQIADAwQACAQADAFQADAEADAAIBRAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgUAHIgUAHQgKAEAAACQAAADAGAEIAIAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJABAFQAEAIAAAPIAAAHIAIAAQAIAAAHgEQAGgEAEgGQAGgHAJgHQAIgFAGgCQAHAKAEAHQAGALgBAHIAAARgADPACIgFAHQADAEAHADQAHADAFABIABgCQgBgFgDgFIgGgIQgFAAgDACgAjOAmQgGAAgEgFQgEgFgBgKQgCgJgBgMIgBgWIgCgSIgDgJIgFgJIALgSQAEALACAQIACAwQACAQADAFQACAEADAAIBSAAQgHgLgJgHQgIgGgPgJIgEAEIgLgJQgGgGAAgCQAAgRAIgKQAHgJATgHIAcgLIAAASIgVAHIgTAHQgKAEAAACQAAADAHAEIAHAGQAPALALAMQAMAMAHAOIAqAAQAAgLgCgHQgDgDgGgHIAHgQQAHAJACAFQADAIAAAPIAAAHIApAAQAAgLgDgHQgBgDgIgHIAIgQQAHAJABAFQADAIAAAPIAAAYgAgtgsIAHgPIAPAIIgHAPg");
	this.shape_1.setTransform(0.1,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._003copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=2;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape.setTransform(-0.4,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape_1.setTransform(-0.4,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._003copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=2;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape.setTransform(-0.4,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape_1.setTransform(-0.4,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._003copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=2;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape.setTransform(-0.4,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape_1.setTransform(-0.4,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._003copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=2;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape.setTransform(-0.4,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape_1.setTransform(-0.4,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._003copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=2;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape.setTransform(-0.4,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape_1.setTransform(-0.4,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._003copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=2;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape.setTransform(-0.4,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape_1.setTransform(-0.4,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=2;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape.setTransform(-0.4,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBUIgOgFIgNgEIACgFIAMADIAMACQANgBANgHQANgIAIgLQAJgMAAgJQAAgHgEgIQgEgHgGgGIAFgPQAIAHAEAIQAEAGAAAKIAAAIIAqAAQAAgMgDgGQgBgEgIgHIAIgPQAHAJABAEQADAIABAPIAAAIIBDAAQgHgLgJgHQgIgHgPgIIgEADIgLgJQgGgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgUAHIgUAHQgKAFAAACQAAACAGAEIAIAGQAPALALANQAMALAHAPIAgAAIgLhRIgFgDIAAgMQACgGACgGIACABQgBAGAHADIAJADIAAALIgCAIIgEgCIALBLIAAAUIiqAAQAAAKgJALQgIALgMAHQgLAHgHAAQgHAAgIgCgAhLBSIgMgEIgNgEIABgEIAMADIALACQAMgBAKgFQAJgFAIgKIAMgOQgOAAgGgFQgIgEAAgMQABgJAEgJQAGgIAJAAQAIAAAEAIQACAHAAAPIAAAKQABAQgMARQgOASgRAAIgOgCgAgpAIQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAEADQAFACAKAAQgDgJgDgEQgCgDgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAjJBJIAIgNIAQAIIgHAOgAiyBAIAHgNIAQAIIgIAOgAENApIAAgHIABgEIgCgdIgDgkIgDgZIAEgJIAFgJIAEAfIADAjIACAbQAAAHgDAIIgGAMgAjZAoQgHAAgFgNQgFgIgCgPQgDAFgEAEQgFADgFAAQgLAAgIgBQgHgCAAgDQAAgIALgIQALgLARgHIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACAQIAFATQADALADAAIA3AAQAAgMgCgGQgCgEgHgHIAIgPQAGAJACAEQADAIAAAPIAAAIIAqAAQgBgMgCgGQgCgEgHgHIAHgPQAIAJABAEQADAIAAAPIAAAZgAj9gHQgEAEgEADIAGABIAHABQAGAAAFgEIgCgLQgIADgGADgABQgoIAHgPIAQAJIgHAOgAiIgrIAHgOIAQAIIgHAOgABngxIAHgPIAQAJIgIAOgAkRg9IAHgNIAQAIIgHANgAj7hGIAHgNIAQAIIgIAOg");
	this.shape_1.setTransform(-0.4,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._002copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=1;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape.setTransform(0,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_1.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._002copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=1;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape.setTransform(0,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_1.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._002copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=1;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape.setTransform(0,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_1.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._002copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=1;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape.setTransform(0,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_1.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._002copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=1;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape.setTransform(0,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_1.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._002copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=1;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape.setTransform(0,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_1.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._002copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=1;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape.setTransform(0,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_1.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._002copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=1;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape.setTransform(0,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_1.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=1;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape.setTransform(0,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBTIgOgEIgOgFIACgEIAOACIAMACQAMAAAOgIQAMgIAJgLQAIgLAAgJQABgIgFgIQgDgHgHgFIAFgQQAIAIAFAHQAEAHAAAKIAAAHIASAAIAIgRQAEgIAGgGQAHgIAFAAQADAAADAGQACAFAAAGQAAAHgEAFQgDADgNAHIBuAAQgGgLgJgHQgJgGgPgJIgDADIgMgJQgFgFAAgDQAAgQAIgKQAHgJATgHIAcgLIAAARIgVAHIgUAIQgKAEABACQAAACAGAFIAIAGQAPALAKAMQANALAHAPIAAARIhzAAQAHADAEAFQAFAHABAIQAAAHgDAFQgDAGgGAAQgMAAgJgJQgMgJAAgQIAAgHIgPAAQAAAKgKAMQgIAKgLAHQgLAHgIAAQgGAAgJgCgACCA3QAGAJAMAAIAEgBQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAgIgMgHQgJgGgJgBQAAALAFAGgACJAFIgIAPQAIgDAGgDQAIgFgBgEQAAgHgDAAQgFAAgFAHgAi3BJIAIgOIAQAIIgHAOgAgaBEIAHgOIARAIIgIAPgAigBAIAHgOIAQAIIgIAOgAg3AnQgHAAgEgGQgDgEgCgKQgCgJgBgMIgBgWIgBgSIgDgKIgGgIIAMgTQADAMACAQIACAwQACAQAEAFQACAEADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAEAJACAFQADAHAAAQIAAAYgAjHAnQgHAAgFgMQgFgJgCgPQgDAGgEADQgFADgFAAQgLAAgIgBQgHgCAAgCQAAgJALgIQALgKARgIIgCgEIAAgEQAAgDACgEIAFgHIACALIADAMIACARIAFASQADALADAAIA3AAQAAgMgCgGQgCgEgHgGIAIgQQAGAJACAFQADAHAAAQIAAAHIAqAAQgBgMgCgGQgCgEgHgGIAHgQQAIAJABAFQADAHAAAQIAAAYgAjrgHQgEADgEAEIAGABIAHAAQAGAAAFgEIgCgLQgIADgGAEgAh0grIgEgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFQAGgGAEAAIAEABIABADIAAADIgCADQgDgCgEAAIgEAAIgCACQAAACAFADQAEACAEAAIACAAIAEgBQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBABIgGADIgSAGQAAgFAJgDgAj/g9IAHgOIAQAIIgHAOgAjphGIAHgOIAQAIIgIAOg");
	this.shape_1.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._001copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=0;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape_1.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._001copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=0;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape_1.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._001copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=0;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape_1.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._001copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=0;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape_1.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._001copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=0;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape_1.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._001copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=0;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape_1.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._001copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=0;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape_1.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._001copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=0;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape_1.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib._001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=0;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0727").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape.setTransform(0,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBLIAHgOIAQAIIgHAOgAg6BCIAHgOIARAIIgIAOgACVApQgGAAgIgDQgKgEgHgGQgGAHgGADQgGADgLAAIg0AAQgGAAgEgEQgEgDAAgEIAAgHIABgHIADAAQABAEADACQACACAEAAIAmAAQAAgSgFgIQgGgOgOgEIABgTQARAIAHASQAGANAAAYIAIAAQAJAAAHgFQAFgDAEgHQAGgIAJgFQAIgFAGgCQAHAKAEAHQAGALAAAHIAAARgACDAFIgGAHQAEAEAGADQAHADAFABIABgCQgBgFgDgGIgGgJQgEABgDADgAhhApQgHAAgFgMQgEgJgDgPQgCAGgFADQgEADgFAAQgMAAgHgBQgIgCAAgCQAAgJALgIQALgKARgIIgBgEIgBgEQAAgDACgEIAFgHIACALIADAMIADARIAEASQADALADAAIA4AAQAAgMgDgGQgCgEgHgGIAIgQQAHAJABAFQADAGAAARIAAAHIAoAAQAAgMgDgGQgCgEgFgGIAGgQQAHAJABAFQADAGAAARIAAAYgAiEgFQgFADgDADIAFACIAHAAQAGAAAFgEIgCgLQgIADgFAEgAgQgqIAHgOIAOAIIgFAOgAiZg7IAHgOIAQAIIgHAOgAiDhEIAHgOIARAIIgIAOg");
	this.shape_1.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#988B9E").s().p("Ap1FVIAAqpITrAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-34.1,126.2,68.4);


(lib.Symbol41copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=55;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");
	this.shape.setTransform(-33.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape}]},4).wait(1));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape_1.setTransform(-47,0.7,1.306,1.186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape_1}]},3).wait(2));

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape_2.setTransform(-37.6,0.7,1.306,1.186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape_2}]},2).wait(3));

	// Layer 11
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-28.2,0.7);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(-28.2,0.7);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(-28.2,0.7);

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(-28.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer 12
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(-18.8,0.7);

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(-18.8,0.7);

	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(-18.8,0.7);

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.setTransform(-18.8,0.7);

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.setTransform(-18.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Layer 2
	this.instance_9 = new lib.Tween12("synched",0);
	this.instance_9.setTransform(33.9,-1.4);

	this.instance_10 = new lib.Tween13("synched",0);
	this.instance_10.setTransform(33.9,-1.4);

	this.instance_11 = new lib.Tween14("synched",0);
	this.instance_11.setTransform(33.9,-1.4);

	this.instance_12 = new lib.Tween15("synched",0);
	this.instance_12.setTransform(33.9,-1.4);

	this.instance_13 = new lib.Tween16("synched",0);
	this.instance_13.setTransform(33.9,-1.4);

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.setTransform(33.9,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	// Layer 3
	this.instance_15 = new lib.Tween18("synched",0);
	this.instance_15.setTransform(20.4,0.7);

	this.instance_16 = new lib.Tween21("synched",0);
	this.instance_16.setTransform(20.4,0.7);

	this.instance_17 = new lib.Tween22("synched",0);
	this.instance_17.setTransform(20.4,0.7);

	this.instance_18 = new lib.Tween23("synched",0);
	this.instance_18.setTransform(20.4,0.7);

	this.instance_19 = new lib.Tween24("synched",0);
	this.instance_19.setTransform(20.4,0.7);

	this.instance_20 = new lib.Tween25("synched",0);
	this.instance_20.setTransform(20.4,0.7);

	this.instance_21 = new lib.Tween26("synched",0);
	this.instance_21.setTransform(20.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).wait(1));

	// Layer 4
	this.instance_22 = new lib.Tween27("synched",0);
	this.instance_22.setTransform(29.8,0.7);

	this.instance_23 = new lib.Tween28("synched",0);
	this.instance_23.setTransform(29.8,0.7);

	this.instance_24 = new lib.Tween31("synched",0);
	this.instance_24.setTransform(29.8,0.7);

	this.instance_25 = new lib.Tween32("synched",0);
	this.instance_25.setTransform(29.8,0.7);

	this.instance_26 = new lib.Tween33("synched",0);
	this.instance_26.setTransform(29.8,0.7);

	this.instance_27 = new lib.Tween34("synched",0);
	this.instance_27.setTransform(29.8,0.7);

	this.instance_28 = new lib.Tween35("synched",0);
	this.instance_28.setTransform(29.8,0.7);

	this.instance_29 = new lib.Tween36("synched",0);
	this.instance_29.setTransform(29.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

	// Layer 5
	this.instance_30 = new lib.Tween37("synched",0);
	this.instance_30.setTransform(39.2,0.7);

	this.instance_31 = new lib.Tween38("synched",0);
	this.instance_31.setTransform(39.2,0.7);

	this.instance_32 = new lib.Tween39("synched",0);
	this.instance_32.setTransform(39.2,0.7);

	this.instance_33 = new lib.Tween42("synched",0);
	this.instance_33.setTransform(39.2,0.7);

	this.instance_34 = new lib.Tween43("synched",0);
	this.instance_34.setTransform(39.2,0.7);

	this.instance_35 = new lib.Tween44("synched",0);
	this.instance_35.setTransform(39.2,0.7);

	this.instance_36 = new lib.Tween45("synched",0);
	this.instance_36.setTransform(39.2,0.7);

	this.instance_37 = new lib.Tween46("synched",0);
	this.instance_37.setTransform(39.2,0.7);

	this.instance_38 = new lib.Tween47("synched",0);
	this.instance_38.setTransform(39.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).wait(1));

	// Layer 6
	this.instance_39 = new lib.Tween48("synched",0);
	this.instance_39.setTransform(48.7,0.7);

	this.instance_40 = new lib.Tween49("synched",0);
	this.instance_40.setTransform(48.7,0.7);

	this.instance_41 = new lib.Tween50("synched",0);
	this.instance_41.setTransform(48.7,0.7);

	this.instance_42 = new lib.Tween51("synched",0);
	this.instance_42.setTransform(48.7,0.7);

	this.instance_43 = new lib.Tween54("synched",0);
	this.instance_43.setTransform(48.7,0.7);

	this.instance_44 = new lib.Tween55("synched",0);
	this.instance_44.setTransform(48.7,0.7);

	this.instance_45 = new lib.Tween56("synched",0);
	this.instance_45.setTransform(48.7,0.7);

	this.instance_46 = new lib.Tween57("synched",0);
	this.instance_46.setTransform(48.7,0.7);

	this.instance_47 = new lib.Tween58("synched",0);
	this.instance_47.setTransform(48.7,0.7);

	this.instance_48 = new lib.Tween59("synched",0);
	this.instance_48.setTransform(48.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol41copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=55;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");
	this.shape.setTransform(-33.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape}]},4).wait(1));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape_1.setTransform(-47,0.7,1.306,1.186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape_1}]},3).wait(2));

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape_2.setTransform(-37.6,0.7,1.306,1.186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape_2}]},2).wait(3));

	// Layer 11
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-28.2,0.7);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(-28.2,0.7);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(-28.2,0.7);

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(-28.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer 12
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(-18.8,0.7);

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(-18.8,0.7);

	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(-18.8,0.7);

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.setTransform(-18.8,0.7);

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.setTransform(-18.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Layer 2
	this.instance_9 = new lib.Tween10("synched",0);
	this.instance_9.setTransform(33.9,-1.4);

	this.instance_10 = new lib.Tween13("synched",0);
	this.instance_10.setTransform(33.9,-1.4);

	this.instance_11 = new lib.Tween14("synched",0);
	this.instance_11.setTransform(33.9,-1.4);

	this.instance_12 = new lib.Tween15("synched",0);
	this.instance_12.setTransform(33.9,-1.4);

	this.instance_13 = new lib.Tween16("synched",0);
	this.instance_13.setTransform(33.9,-1.4);

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.setTransform(33.9,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	// Layer 3
	this.instance_15 = new lib.Tween18("synched",0);
	this.instance_15.setTransform(20.4,0.7);

	this.instance_16 = new lib.Tween19("synched",0);
	this.instance_16.setTransform(20.4,0.7);

	this.instance_17 = new lib.Tween22("synched",0);
	this.instance_17.setTransform(20.4,0.7);

	this.instance_18 = new lib.Tween23("synched",0);
	this.instance_18.setTransform(20.4,0.7);

	this.instance_19 = new lib.Tween24("synched",0);
	this.instance_19.setTransform(20.4,0.7);

	this.instance_20 = new lib.Tween25("synched",0);
	this.instance_20.setTransform(20.4,0.7);

	this.instance_21 = new lib.Tween26("synched",0);
	this.instance_21.setTransform(20.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).wait(1));

	// Layer 4
	this.instance_22 = new lib.Tween27("synched",0);
	this.instance_22.setTransform(29.8,0.7);

	this.instance_23 = new lib.Tween28("synched",0);
	this.instance_23.setTransform(29.8,0.7);

	this.instance_24 = new lib.Tween29("synched",0);
	this.instance_24.setTransform(29.8,0.7);

	this.instance_25 = new lib.Tween32("synched",0);
	this.instance_25.setTransform(29.8,0.7);

	this.instance_26 = new lib.Tween33("synched",0);
	this.instance_26.setTransform(29.8,0.7);

	this.instance_27 = new lib.Tween34("synched",0);
	this.instance_27.setTransform(29.8,0.7);

	this.instance_28 = new lib.Tween35("synched",0);
	this.instance_28.setTransform(29.8,0.7);

	this.instance_29 = new lib.Tween36("synched",0);
	this.instance_29.setTransform(29.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

	// Layer 5
	this.instance_30 = new lib.Tween37("synched",0);
	this.instance_30.setTransform(39.2,0.7);

	this.instance_31 = new lib.Tween38("synched",0);
	this.instance_31.setTransform(39.2,0.7);

	this.instance_32 = new lib.Tween39("synched",0);
	this.instance_32.setTransform(39.2,0.7);

	this.instance_33 = new lib.Tween40("synched",0);
	this.instance_33.setTransform(39.2,0.7);

	this.instance_34 = new lib.Tween43("synched",0);
	this.instance_34.setTransform(39.2,0.7);

	this.instance_35 = new lib.Tween44("synched",0);
	this.instance_35.setTransform(39.2,0.7);

	this.instance_36 = new lib.Tween45("synched",0);
	this.instance_36.setTransform(39.2,0.7);

	this.instance_37 = new lib.Tween46("synched",0);
	this.instance_37.setTransform(39.2,0.7);

	this.instance_38 = new lib.Tween47("synched",0);
	this.instance_38.setTransform(39.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).wait(1));

	// Layer 6
	this.instance_39 = new lib.Tween48("synched",0);
	this.instance_39.setTransform(48.7,0.7);

	this.instance_40 = new lib.Tween49("synched",0);
	this.instance_40.setTransform(48.7,0.7);

	this.instance_41 = new lib.Tween50("synched",0);
	this.instance_41.setTransform(48.7,0.7);

	this.instance_42 = new lib.Tween51("synched",0);
	this.instance_42.setTransform(48.7,0.7);

	this.instance_43 = new lib.Tween52("synched",0);
	this.instance_43.setTransform(48.7,0.7);

	this.instance_44 = new lib.Tween55("synched",0);
	this.instance_44.setTransform(48.7,0.7);

	this.instance_45 = new lib.Tween56("synched",0);
	this.instance_45.setTransform(48.7,0.7);

	this.instance_46 = new lib.Tween57("synched",0);
	this.instance_46.setTransform(48.7,0.7);

	this.instance_47 = new lib.Tween58("synched",0);
	this.instance_47.setTransform(48.7,0.7);

	this.instance_48 = new lib.Tween59("synched",0);
	this.instance_48.setTransform(48.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol41copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=55;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");
	this.shape.setTransform(-33.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape}]},4).wait(1));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape_1.setTransform(-47,0.7,1.306,1.186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape_1}]},3).wait(2));

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape_2.setTransform(-37.6,0.7,1.306,1.186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape_2}]},2).wait(3));

	// Layer 11
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-28.2,0.7);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(-28.2,0.7);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(-28.2,0.7);

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(-28.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer 12
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(-18.8,0.7);

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(-18.8,0.7);

	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(-18.8,0.7);

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.setTransform(-18.8,0.7);

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.setTransform(-18.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Layer 2
	this.instance_9 = new lib.Tween10("synched",0);
	this.instance_9.setTransform(33.9,-1.4);

	this.instance_10 = new lib.Tween13("synched",0);
	this.instance_10.setTransform(33.9,-1.4);

	this.instance_11 = new lib.Tween14("synched",0);
	this.instance_11.setTransform(33.9,-1.4);

	this.instance_12 = new lib.Tween15("synched",0);
	this.instance_12.setTransform(33.9,-1.4);

	this.instance_13 = new lib.Tween16("synched",0);
	this.instance_13.setTransform(33.9,-1.4);

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.setTransform(33.9,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	// Layer 3
	this.instance_15 = new lib.Tween18("synched",0);
	this.instance_15.setTransform(20.4,0.7);

	this.instance_16 = new lib.Tween19("synched",0);
	this.instance_16.setTransform(20.4,0.7);

	this.instance_17 = new lib.Tween22("synched",0);
	this.instance_17.setTransform(20.4,0.7);

	this.instance_18 = new lib.Tween23("synched",0);
	this.instance_18.setTransform(20.4,0.7);

	this.instance_19 = new lib.Tween24("synched",0);
	this.instance_19.setTransform(20.4,0.7);

	this.instance_20 = new lib.Tween25("synched",0);
	this.instance_20.setTransform(20.4,0.7);

	this.instance_21 = new lib.Tween26("synched",0);
	this.instance_21.setTransform(20.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).wait(1));

	// Layer 4
	this.instance_22 = new lib.Tween27("synched",0);
	this.instance_22.setTransform(29.8,0.7);

	this.instance_23 = new lib.Tween28("synched",0);
	this.instance_23.setTransform(29.8,0.7);

	this.instance_24 = new lib.Tween29("synched",0);
	this.instance_24.setTransform(29.8,0.7);

	this.instance_25 = new lib.Tween32("synched",0);
	this.instance_25.setTransform(29.8,0.7);

	this.instance_26 = new lib.Tween33("synched",0);
	this.instance_26.setTransform(29.8,0.7);

	this.instance_27 = new lib.Tween34("synched",0);
	this.instance_27.setTransform(29.8,0.7);

	this.instance_28 = new lib.Tween35("synched",0);
	this.instance_28.setTransform(29.8,0.7);

	this.instance_29 = new lib.Tween36("synched",0);
	this.instance_29.setTransform(29.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

	// Layer 5
	this.instance_30 = new lib.Tween37("synched",0);
	this.instance_30.setTransform(39.2,0.7);

	this.instance_31 = new lib.Tween38("synched",0);
	this.instance_31.setTransform(39.2,0.7);

	this.instance_32 = new lib.Tween39("synched",0);
	this.instance_32.setTransform(39.2,0.7);

	this.instance_33 = new lib.Tween40("synched",0);
	this.instance_33.setTransform(39.2,0.7);

	this.instance_34 = new lib.Tween43("synched",0);
	this.instance_34.setTransform(39.2,0.7);

	this.instance_35 = new lib.Tween44("synched",0);
	this.instance_35.setTransform(39.2,0.7);

	this.instance_36 = new lib.Tween45("synched",0);
	this.instance_36.setTransform(39.2,0.7);

	this.instance_37 = new lib.Tween46("synched",0);
	this.instance_37.setTransform(39.2,0.7);

	this.instance_38 = new lib.Tween47("synched",0);
	this.instance_38.setTransform(39.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).wait(1));

	// Layer 6
	this.instance_39 = new lib.Tween48("synched",0);
	this.instance_39.setTransform(48.7,0.7);

	this.instance_40 = new lib.Tween49("synched",0);
	this.instance_40.setTransform(48.7,0.7);

	this.instance_41 = new lib.Tween50("synched",0);
	this.instance_41.setTransform(48.7,0.7);

	this.instance_42 = new lib.Tween51("synched",0);
	this.instance_42.setTransform(48.7,0.7);

	this.instance_43 = new lib.Tween52("synched",0);
	this.instance_43.setTransform(48.7,0.7);

	this.instance_44 = new lib.Tween55("synched",0);
	this.instance_44.setTransform(48.7,0.7);

	this.instance_45 = new lib.Tween56("synched",0);
	this.instance_45.setTransform(48.7,0.7);

	this.instance_46 = new lib.Tween57("synched",0);
	this.instance_46.setTransform(48.7,0.7);

	this.instance_47 = new lib.Tween58("synched",0);
	this.instance_47.setTransform(48.7,0.7);

	this.instance_48 = new lib.Tween59("synched",0);
	this.instance_48.setTransform(48.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.id=55;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0343E").ss(2).p("AjhhwIHDDh");
	this.shape.setTransform(-33.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape}]},4).wait(1));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape_1.setTransform(-47,0.7,1.306,1.186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape_1}]},3).wait(2));

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C0343E").ss(2).p("AAAilIAAFL");
	this.shape_2.setTransform(-37.6,0.7,1.306,1.186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},5).to({state:[{t:this.shape_2}]},2).wait(3));

	// Layer 11
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-28.2,0.7);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(-28.2,0.7);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(-28.2,0.7);

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(-28.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer 12
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(-18.8,0.7);

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(-18.8,0.7);

	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(-18.8,0.7);

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.setTransform(-18.8,0.7);

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.setTransform(-18.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Layer 2
	this.instance_9 = new lib.Tween12("synched",0);
	this.instance_9.setTransform(33.9,-1.4);

	this.instance_10 = new lib.Tween13("synched",0);
	this.instance_10.setTransform(33.9,-1.4);

	this.instance_11 = new lib.Tween14("synched",0);
	this.instance_11.setTransform(33.9,-1.4);

	this.instance_12 = new lib.Tween15("synched",0);
	this.instance_12.setTransform(33.9,-1.4);

	this.instance_13 = new lib.Tween16("synched",0);
	this.instance_13.setTransform(33.9,-1.4);

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.setTransform(33.9,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	// Layer 3
	this.instance_15 = new lib.Tween18("synched",0);
	this.instance_15.setTransform(20.4,0.7);

	this.instance_16 = new lib.Tween21("synched",0);
	this.instance_16.setTransform(20.4,0.7);

	this.instance_17 = new lib.Tween22("synched",0);
	this.instance_17.setTransform(20.4,0.7);

	this.instance_18 = new lib.Tween23("synched",0);
	this.instance_18.setTransform(20.4,0.7);

	this.instance_19 = new lib.Tween24("synched",0);
	this.instance_19.setTransform(20.4,0.7);

	this.instance_20 = new lib.Tween25("synched",0);
	this.instance_20.setTransform(20.4,0.7);

	this.instance_21 = new lib.Tween26("synched",0);
	this.instance_21.setTransform(20.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).wait(1));

	// Layer 4
	this.instance_22 = new lib.Tween27("synched",0);
	this.instance_22.setTransform(29.8,0.7);

	this.instance_23 = new lib.Tween28("synched",0);
	this.instance_23.setTransform(29.8,0.7);

	this.instance_24 = new lib.Tween31("synched",0);
	this.instance_24.setTransform(29.8,0.7);

	this.instance_25 = new lib.Tween32("synched",0);
	this.instance_25.setTransform(29.8,0.7);

	this.instance_26 = new lib.Tween33("synched",0);
	this.instance_26.setTransform(29.8,0.7);

	this.instance_27 = new lib.Tween34("synched",0);
	this.instance_27.setTransform(29.8,0.7);

	this.instance_28 = new lib.Tween35("synched",0);
	this.instance_28.setTransform(29.8,0.7);

	this.instance_29 = new lib.Tween36("synched",0);
	this.instance_29.setTransform(29.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

	// Layer 5
	this.instance_30 = new lib.Tween37("synched",0);
	this.instance_30.setTransform(39.2,0.7);

	this.instance_31 = new lib.Tween38("synched",0);
	this.instance_31.setTransform(39.2,0.7);

	this.instance_32 = new lib.Tween39("synched",0);
	this.instance_32.setTransform(39.2,0.7);

	this.instance_33 = new lib.Tween42("synched",0);
	this.instance_33.setTransform(39.2,0.7);

	this.instance_34 = new lib.Tween43("synched",0);
	this.instance_34.setTransform(39.2,0.7);

	this.instance_35 = new lib.Tween44("synched",0);
	this.instance_35.setTransform(39.2,0.7);

	this.instance_36 = new lib.Tween45("synched",0);
	this.instance_36.setTransform(39.2,0.7);

	this.instance_37 = new lib.Tween46("synched",0);
	this.instance_37.setTransform(39.2,0.7);

	this.instance_38 = new lib.Tween47("synched",0);
	this.instance_38.setTransform(39.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).wait(1));

	// Layer 6
	this.instance_39 = new lib.Tween48("synched",0);
	this.instance_39.setTransform(48.7,0.7);

	this.instance_40 = new lib.Tween49("synched",0);
	this.instance_40.setTransform(48.7,0.7);

	this.instance_41 = new lib.Tween50("synched",0);
	this.instance_41.setTransform(48.7,0.7);

	this.instance_42 = new lib.Tween51("synched",0);
	this.instance_42.setTransform(48.7,0.7);

	this.instance_43 = new lib.Tween54("synched",0);
	this.instance_43.setTransform(48.7,0.7);

	this.instance_44 = new lib.Tween55("synched",0);
	this.instance_44.setTransform(48.7,0.7);

	this.instance_45 = new lib.Tween56("synched",0);
	this.instance_45.setTransform(48.7,0.7);

	this.instance_46 = new lib.Tween57("synched",0);
	this.instance_46.setTransform(48.7,0.7);

	this.instance_47 = new lib.Tween58("synched",0);
	this.instance_47.setTransform(48.7,0.7);

	this.instance_48 = new lib.Tween59("synched",0);
	this.instance_48.setTransform(48.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol1111 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.اشتقاقالدوالالأسية();
	this.instance.setTransform(15.2,-10.6,1,1,0,0,0,126.1,12.9);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.2)",1,1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3AACE2").s().p("AI3FPI0DgsIAApFIUDgsQA9gCAtArQAsArAAA9IAAF7QAAA+gsAqQgqApg5AAIgHAAg");
	this.shape.setTransform(71.4,-12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E8BB4").s().p("AmWhuIMtAbIAADDg");
	this.shape_1.setTransform(40.4,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3AACE2").s().p("AqYEeQg0gyAAhJIAAlGQAAhIA0gzQA0gyBIADITpArIAAJFIzpArIgGAAQhEAAgygwg");
	this.shape_2.setTransform(-71.2,-12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E8BB4").s().p("AmWhTIMtgbIstDeg");
	this.shape_3.setTransform(-40.3,27.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143,-46.1,286.2,85.1);


(lib.bubble2blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("ADgA1IAJgJIAMALIgJAKgAjPA8IgGAFIgMgMIAJgJIAGAGIAGgGIAMALIgKAKgAhXA0IAJgKIAMAMIgJAJgAgHA0QgGgFAAgLQAAgMAJgRIgBACIgBAMQAAASANABQAJAAAMgJQgDgOgHgHIALgLQAFAFADAKIAfAAIAMgOQAHgKAGAAQAHAAAGAKQAFAKAAAGIgCAHIgIANIgBADIgcgMIgEAHIgfAAIgCAKIgDAGQgOAIgNABIgBAAQgGAAgFgHgABiAQIgDgHQgCgEgDAAIgHAFIACAAIANAGgAEOAiIAAgGIgDgrIAOgRIAEAUIgDADIABAQIgCAPIgHAMIgEAEgACLAiIABgGIgDgrIAPgRIADAUIgDADIABAQIgBAPIgIAMIgFAEgADMAiIgEgGIgDAGIgaAAIgEgBQgDgDAAgFIACgKIAFgIIAAAAQAAAGAFABIAQAAIgIgOIAIgMIARAaIAjAAIgGgJIAKgMQAIAHAAAKIgCAMIgFAMgAiQAiIgEgGIgDAGIgaAAIgDgBQgEgDAAgFIACgKIAFgIIAAAAQAAAGAFABIAQAAIgIgOIAIgMIARAaIA0AAIgBgBIgGgEIgKgCIgHABIAKgJQAFgGAEAAQADAAAFADIAXAJQAKADAHgBIACAAIgLASIgNgBQgJABgDADIgDADIgGADgAj0AiIgEgGIgDAGIgaAAIgEgBQgDgDAAgFIACgKIAFgIIAAAAQAAAGAFABIAQAAIgIgOIAIgMIARAaIAjAAIgGgJIAKgMQAIAHAAAKIgCAMIgFAMgAAAgLIAHgJIANALIgKAJgACMgrQgEgCAAgFQAAgFAEgFQAGgEAGAAQADAAABACIgBAEIgBAEIgGgBIgGACQAFACAFAAIAGgBIgDAJQgNAAgGAKQABgFADgFg");
	this.shape.setTransform(0.3,-0.5,0.615,0.615);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},3).wait(1));

	// center
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#86C5DF","#7DC0DB"],[0,0.925,1],-5.9,-5.6,0,-5.9,-5.6,21).s().p("AhQDBQgmgQgegdQgcgdgQgmQgRgnABgqQgBgpARgnQAQgmAcgeQAegdAmgPQAngQApAAQAqAAAnAQQAlAPAeAdQAdAeAQAmQAQAnAAApQABAqgRAnQgQAmgdAdQgeAdglAQQgnAQgqAAQgpAAgngQg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#BCDFED","#72BBDA","#67BED3"],[0,0.925,1],-5.9,-5.6,0,-5.9,-5.6,21).s().p("AhQDBQgmgQgegdQgcgdgQgmQgRgnABgqQgBgpARgnQAQgmAcgeQAegdAmgPQAngQApAAQAqAAAnAQQAlAPAeAdQAdAeAQAmQAQAnAAApQABAqgRAnQgQAmgdAdQgeAdglAQQgnAQgqAAQgpAAgngQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},2).to({state:[]},1).wait(1));

	// center border
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D8BB2").s().p("AhVDKQgngRgegeQgfgegRgoQgRgpABgsQgBgrARgqQARgnAfgeQAegfAngRQAqgRArABQAsgBApARQAnARAfAfQAfAeAQAnQARAqAAArQABAsgSApQgQAogfAeQgfAegnARQgpARgsAAQgrABgqgSg");

	this.instance = new lib.bubble2blueglow();
	this.instance.setTransform(0,0,0.815,0.815);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,153,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// gradient circle
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#86C5DF","#308AAF"],[0,1],15.9,17.7,-17,-16.6).s().p("AhcDdQgrgTgighQghghgSgsQgTgsAAgwQAAgwATgsQASgrAhgiQAiggArgTQAtgSAvgBQAwABAsASQAsATAhAgQAhAiATArQASAsABAwQAAAwgTAsQgTAsghAhQghAhgsATQgsASgwABQgvAAgtgTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[]},3).wait(1));

	// outer circle
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#47A4CB").s().p("AhoD4QgwgVglglQgmglgVgwQgVgzAAg2QAAg1AVgzQAVgwAmglQAlgmAwgVQAzgUA1gBQA2ABAzAUQAwAVAlAmQAmAlAUAwQAVAzABA1QAAA2gWAzQgUAwgmAlQglAlgwAVQgzAVg2ABQg1AAgzgWg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#469AA9").s().p("AhoD4QgwgVglglQgmglgVgwQgVgzAAg2QAAg1AVgzQAVgwAmglQAlgmAwgVQAzgUA1gBQA2ABAzAUQAwAVAlAmQAmAlAUAwQAVAzABA1QAAA2gWAzQgUAwgmAlQglAlgwAVQgzAVg2ABQg1AAgzgWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[]},1).wait(1));

	// outer border
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A0D1E6").s().p("AhwELQg0gXgogoQgogogWg0QgXg2ABg6QgBg6AXg2QAWg0AogoQAogoA0gWQA3gXA5ABQA6gBA2AXQA0AWAoAoQApAoAWA0QAWA2AAA6QABA6gXA2QgWA0gpAoQgoAog0AXQg2AWg6AAIAAAAQg6AAg2gWg");

	this.instance_1 = new lib.bubble2blueglow("synched",0);
	this.instance_1.setTransform(0,0,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-28.9,58,58);


(lib.titel111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1111("synched",0);
	this.instance.setTransform(-0.5,-1.5,0.05,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.25,scaleY:0.25},0).wait(1).to({scaleX:0.43,scaleY:0.43},0).wait(1).to({scaleX:0.59,scaleY:0.59},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:-1.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:-1.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:-1.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:-1.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:-1.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-1.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-1.3},0).wait(1).to({scaleX:1,scaleY:1,y:-1.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-3.8,14.3,4.3);


(lib.Chart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.titel111("synched",0,false);
	this.instance.setTransform(0.5,-326.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(283));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.6,-383.5,343.4,102.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;