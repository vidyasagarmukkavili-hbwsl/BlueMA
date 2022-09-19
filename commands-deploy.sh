#!/bin/bash
sudo grunt clean
sudo php bin/magento set:up
sudo php bin/magento s:s:d -f
sudo php bin/magento i:rei
sudo php bin/magento c:f