	$(function() {
		$(".collection").sortable({
			connectWith : ".collection"
		});	
	});
	var app = {
		newJob: function(e, type, input) {
			var jobName = $(input).val();
			var event = window.event || e;
			if (event.keyCode == 13 && jobName.trim() != '') {
				// update list job
				this.addJobToList(type,jobName);
				// reset input new job
				$(input).val('');
			}
		},
		addJobToList: function(type, jobName) {
			var item = '<div class="card-body">'+jobName+'<i class="fa fa-trash" onclick="app.deleteJob(this)"></i></div>';
			$('#'+type).append(item);
		},
		deleteJob: function(i) {
			var item = $(i).parent();
			$('#modal-confirm').modal('show');
			$('#agree').on('click', function(){
				$(i).parent().remove();
				$('#modal-confirm').modal('hide');
			});
		}
	};