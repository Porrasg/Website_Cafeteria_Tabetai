task :schedule_and_work do
    if Process.respond_to?(:fork)
      if Process.fork
        sh('rake environment resque:work')
      else
        sh('rake environment resque:scheduler')
        Process.wait
      end
    else # windows
      pid = Process.spawn 'rake environment resque:work'
      Rake::Task['environment resque:scheduler'].invoke
      Process.wait(pid)
    end
  end