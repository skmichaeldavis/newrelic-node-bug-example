#!/usr/bin/env node
/*
 * Copyright 2022 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


process.env.NEW_RELIC_NO_CONFIG_FILE = true
process.env.NEW_RELIC_APP_NAME = 'log-generator'
// process.env.NEW_RELIC_LICENSE_KEY = <your-license-key>
process.env.NEW_RELIC_HOST = 'staging-collector.newrelic.com'
process.env.NEW_RELIC_LOG_LEVEL = 'info'
// set the next env var to false to disable all application logging features
process.env.NEW_RELIC_APPLICATION_LOGGING_ENABLED = true
process.env.NEW_RELIC_APPLICATION_LOGGING_FORWARDING_ENABLED = true
process.env.NEW_RELIC_APPLICATION_LOGGING_METRICS_ENABLED = true
process.env.NEW_RELIC_APPLICATION_LOGGING_FORWARDING_MAX_SAMPLES_STORED = 10000
process.env.NEW_RELIC_APPLICATION_LOGGING_LOCAL_DECORATING_ENABLED = false
const winston = require("winston");
const newrelicFormatter = require("@newrelic/winston-enricher");
const newrelicWinstonFormatter = newrelicFormatter(winston);
const {S3StreamLogger} = require('s3-streamlogger');


class Logger {

  constructor() {
    const s3_stream = new S3StreamLogger({
      config: {
        apiVersion: "2006-03-01",
      },
      bucket: "example.bucket"
    });
  }
}

module.exports = Logger;