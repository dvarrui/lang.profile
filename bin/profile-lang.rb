#!/usr/bin/env ruby

def get_features
  dirpath = File.join('..', 'features')
  features = Dir[ "#{dirpath}/*.d" ]
end

features = get_features

puts features

